local placing = {}
placing.__index = placing

local rs = game:GetService("RunService")
local rep = game:GetService("ReplicatedStorage")
local uis = game:GetService("UserInputService")

local spring = require(script:WaitForChild("SpringModule"))

local req = rep:WaitForChild("Remotes").RequestPlacing
local remote = rep:WaitForChild("Remotes").Place

local springObject = spring.create()

local gridStorage = workspace.Terrain:FindFirstChild("GridStorage") or Instance.new("Folder",workspace.Terrain)
gridStorage.Name = "GridStorage"
local gridSize = Vector2.new(23,23)
local gridPart = Instance.new("Part")
gridPart.Transparency = 1
gridPart.Size = Vector3.new(1,0,1)
gridPart.Anchored = true
gridPart.CanCollide = false
local sel = Instance.new("SelectionBox",gridPart)
sel.Color3 = Color3.new(1,1,1)
sel.LineThickness = 0.05

local rotInc = 90

function round(n, to)
	return n % to ~= 0 and (n % to) > to/2 and (n + to - (n % to)) or (n - (n % to))
end
function renderGrid(pos,ray,size,grid)
	local hit = (ray and ray.Position or pos - Vector3.new(0,size.Y + 10,0))
	gridStorage:ClearAllChildren()
	for x = 1,math.round(gridSize.X/grid) do
		for y = 1,math.round(gridSize.Y/grid) do
			local cf = CFrame.new(-gridSize.X/2 + x * grid,0,-gridSize.Y/2 + y * grid)
			local part = gridPart:Clone()
			part.Size = Vector3.new(grid,0,grid)
			part.CFrame = CFrame.new(cf.p,(ray and ray.Normal or Vector3.new(0,1,0)))
			part.Parent = gridStorage
		end
	end
end
function set(object,bool)
	if bool then
		local sel = sel:Clone()
		sel.Color3 = Color3.new(0,1,0)
		sel.Name = "PlacementBox"
		sel.Parent = object
		sel.Adornee = object
	else
		if object:FindFirstChild("PlacementBox")then
			object.PlacementBox:Destroy()
		end
	end
end

function placing:Init(obj,grid,mouse)
	if typeof(mouse) == "table"then
		game.Players.LocalPlayer:Kick("Nice try, bud.\nI know you synapse x dudes will bypass this, respect.")
	end
	local object = req:InvokeServer(obj)
	if mouse then
		mouse.TargetFilter = object
	end
	local grid = grid or 1
	local params = RaycastParams.new()
	params.FilterType = Enum.RaycastFilterType.Blacklist
	params.FilterDescendantsInstances = {}

	assert(object,"Object must be an instance and cannot be left nil.")
	assert(object:IsA("Model"),"Object must be a model.")
	local self
	self = setmetatable({
		_object = object;
		_mouse = mouse;
		_rotation = CFrame.fromEulerAnglesXYZ(0,0,0);
		_input = uis.InputBegan:Connect(function(input)
			if input.KeyCode == Enum.KeyCode.R then
				self._rotation *= CFrame.fromEulerAnglesXYZ(0,0,math.rad(rotInc))
			end
			if input.KeyCode == Enum.KeyCode.T then
				self._rotation *= CFrame.fromEulerAnglesXYZ(math.rad(rotInc),0,0)
			end
			if input.KeyCode == Enum.KeyCode.Y then
				self._rotation *= CFrame.fromEulerAnglesXYZ(0,math.rad(rotInc),0)
			end
		end);
	},placing)
	set(object,true)
	rs:BindToRenderStep("place",Enum.RenderPriority.Last.Value,function(dt)
		local newPos = springObject:update(dt)
		local pos,size = object:GetBoundingBox()
		local pos = pos.p
		local ray = workspace:Raycast(pos,pos - Vector3.new(0,size.Y + 10,0),params)
		local normal = (ray and ray.Normal or Vector3.new(0,1,0))
		renderGrid(pos,ray,size,grid)
		local hit = Vector3.new(round(mouse.Hit.p.X,grid),round(mouse.Hit.p.Y,grid),round(mouse.Hit.p.Z,grid))
		object:SetPrimaryPartCFrame(CFrame.new(newPos,normal) * self._rotation)
		springObject:shove(hit)
	end)

	return self
end

function placing:Place(self)
	if self._mouse then
		self._mouse.TargetFilter = nil
	end
	set(self._object,false)
	self._input:Disconnect()
	remote:FireServer("Place",{
		self._object;
		self._object.PrimaryPart.CFrame;
	})
end

return placing
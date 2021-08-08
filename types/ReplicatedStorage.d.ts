interface ReplicatedStorage extends Instance {
	Modules: Folder & {
		Placement: ModuleScript & {
			SpringModule: ModuleScript;
		};
	};
	util: ModuleScript;
	Models: Folder & {
		Zombie: Model & {
			["Left Leg"]: Part;
			Humanoid: Humanoid;
			["Right Leg"]: Part;
			Head: Part & {
				Hurt: Sound;
				Face: Decal;
				Mesh: SpecialMesh;
				Death: Sound;
			};
			Attack1: Animation;
			Torso: Part & {
				["Left Shoulder"]: Motor6D;
				["Right Shoulder"]: Motor6D;
				Neck: Motor6D;
				["Right Hip"]: Motor6D;
				HitSound: Sound;
				["Left Hip"]: Motor6D;
			};
			HumanoidRootPart: Part & {
				["Root Hip"]: Motor6D;
			};
			Attack2: Animation;
			TEAM: BrickColorValue;
			["Right Arm"]: Part;
			["Left Arm"]: Part;
			Attack3: Animation;
			EquipAnim: Animation;
			["Body Colors"]: BodyColors;
		};
		Human: Model & {
			["Left Leg"]: Part & {
				["5"]: MeshPart & {
					Weld: ManualWeld;
				};
				MeshPart: MeshPart & {
					Weld: ManualWeld;
				};
			};
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			["Right Leg"]: Part & {
				["5"]: MeshPart & {
					Weld: ManualWeld;
				};
				MeshPart: MeshPart & {
					Weld: ManualWeld;
				};
			};
			Head: Part & {
				Mesh: SpecialMesh;
				Decal: Decal;
			};
			Torso: Part & {
				Chest: Model & {
					Middle: Part & {
						Weld: ManualWeld;
					};
					plateminus: MeshPart & {
						Weld: ManualWeld;
					};
				};
			};
			HumanoidRootPart: Part & {
				["Root Hip"]: Motor6D & {
					DefaultC1: CFrameValue;
				};
			};
			["Right Arm"]: Part & {
				MeshPart: MeshPart & {
					Weld: ManualWeld;
				};
				["Glove Left"]: MeshPart & {
					Weld: ManualWeld;
				};
				Mesh1: MeshPart & {
					Weld: ManualWeld;
				};
			};
			["Left Arm"]: Part & {
				MeshPart: MeshPart & {
					Weld: ManualWeld;
				};
				["Glove Left"]: MeshPart & {
					Weld: ManualWeld;
				};
				Mesh1: MeshPart & {
					Weld: ManualWeld;
				};
			};
			AnimSaves: Model & {
				["Automatic Save"]: KeyframeSequence;
			};
			["Body Colors"]: BodyColors;
		};
	};
	types: Folder & {
		DisplayOrders: ModuleScript;
		Teams: ModuleScript;
		charactertypes: ModuleScript;
	};
	items: ModuleScript;
	Remotes: Folder & {
		Place: RemoteEvent;
		TeamSelected: RemoteEvent;
		RequestPlacing: RemoteFunction;
	};
	components: Folder & {
		topbaroffset: ModuleScript;
		playerdisplay: ModuleScript & {
			display: ModuleScript;
			hurt: ModuleScript;
		};
		page: ModuleScript;
		selectteam: ModuleScript & {
			pattern: ModuleScript;
			viewport: ModuleScript;
		};
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			roact: Folder & {
				src: ModuleScript & {
					createSpy: ModuleScript;
					createSignal: ModuleScript;
					oneChild: ModuleScript;
					Component: ModuleScript;
					createElement: ModuleScript;
					createReconciler: ModuleScript;
					GlobalConfig: ModuleScript;
					strict: ModuleScript;
					createRef: ModuleScript;
					Type: ModuleScript;
					Portal: ModuleScript;
					Symbol: ModuleScript;
					PropMarkers: Folder & {
						Ref: ModuleScript;
						Change: ModuleScript;
						Children: ModuleScript;
						Event: ModuleScript;
					};
					ComponentLifecyclePhase: ModuleScript;
					Config: ModuleScript;
					assign: ModuleScript;
					assertDeepEqual: ModuleScript;
					getDefaultInstanceProperty: ModuleScript;
					Binding: ModuleScript;
					NoopRenderer: ModuleScript;
					forwardRef: ModuleScript;
					internalAssert: ModuleScript;
					createReconcilerCompat: ModuleScript;
					createFragment: ModuleScript;
					RobloxRenderer: ModuleScript;
					PureComponent: ModuleScript;
					invalidSetStateMessages: ModuleScript;
					ElementKind: ModuleScript;
					createContext: ModuleScript;
					Logging: ModuleScript;
					ElementUtils: ModuleScript;
					SingleEventManager: ModuleScript;
					None: ModuleScript;
				};
			};
			services: ModuleScript;
			rodux: Folder & {
				src: ModuleScript & {
					combineReducers: ModuleScript;
					NoYield: ModuleScript;
					createReducer: ModuleScript;
					loggerMiddleware: ModuleScript;
					makeActionCreator: ModuleScript;
					thunkMiddleware: ModuleScript;
					prettyPrint: ModuleScript;
					Store: ModuleScript;
					Signal: ModuleScript;
				};
			};
			t: Folder & {
				lib: Folder & {
					ts: ModuleScript;
				};
			};
			["compiler-types"]: Folder & {
				types: Folder;
			};
			types: Folder & {
				include: Folder & {
					generated: Folder;
				};
			};
		};
	};
}

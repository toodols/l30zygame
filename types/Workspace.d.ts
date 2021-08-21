interface Workspace extends Model {
	Unused: Folder & {
		Baseplate: Part & {
			Texture: Texture;
		};
	};
	["Keyboard??"]: Part;
	["Hologram Device"]: UnionOperation;
	["European Soldier"]: Model & {
		["Left Leg"]: Part;
		["Right Leg"]: Part;
		["Work Axe"]: Model & {
			Handle: UnionOperation;
			["Axe Middle"]: UnionOperation;
			Union: UnionOperation;
		};
		["Shield 2"]: Model & {
			Straps: UnionOperation;
		};
		Part: Part & {
			Mesh: BlockMesh;
		};
		Torso: Part;
		["Left Arm"]: Part;
		Head: UnionOperation;
	};
	ye: Part & {
		Mesh: SpecialMesh;
	};
	Pod: Model & {
		Model: Model;
		thing: Model & {
			Union: UnionOperation;
		};
		door: Model & {
			Union: UnionOperation;
		};
	};
	["Auto-Delete"]: Folder & {
		Tank: Model & {
			Top: Model & {
				Model: Model & {
					Antena: Model;
					Model: Model;
				};
				Gun: Model & {
					Scope: UnionOperation;
					Model: Model & {
						Union: UnionOperation;
						Model: Model & {
							Part: Part;
						};
					};
				};
			};
			Main: Model;
			Union: UnionOperation;
		};
		["Noobs core"]: Model & {
			Model: Model & {
				Part: Part & {
					Mesh: SpecialMesh;
				};
				Core: Part & {
					Glow: ParticleEmitter;
					Attachment: Attachment & {
						Rays_Thin: ParticleEmitter;
						Rays_Thick: ParticleEmitter;
						Wave: ParticleEmitter;
						Core: ParticleEmitter;
					};
				};
			};
			light2: Model & {
				light1: Part & {
					light: Beam;
					Attachment: Attachment;
				};
			};
		};
		["killerwolfdragon1222's sword"]: Model & {
			Part1: Part & {
				Mesh: SpecialMesh;
			};
			Beamstart2: Part & {
				Beam: Beam;
				Attachment0: Attachment;
			};
			Beamend1: Part & {
				Attachment1: Attachment;
			};
			Beamend2: Part & {
				Attachment1: Attachment;
			};
			Beamstart1: Part & {
				Beam: Beam;
				Attachment0: Attachment;
			};
			Part4: Part & {
				Mesh: SpecialMesh;
			};
		};
		["dont use"]: Model & {
			["Left Leg"]: Part & {
				["5"]: MeshPart;
				Model: Model & {
					MeshPart: MeshPart;
				};
			};
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			["Right Leg"]: Part & {
				["5"]: MeshPart;
				Model: Model & {
					MeshPart: MeshPart;
				};
			};
			Head: Part & {
				Decal: Decal;
				Mesh: SpecialMesh;
				Helmet: Model & {
					Top: Model & {
						Middle: Part;
						fasthelmet: MeshPart;
					};
				};
			};
			Torso: Part & {
				Chest: Model & {
					Middle: Part;
					plateminus: MeshPart;
				};
				["Right Shoulder"]: Motor6D & {
					DefaultC1: CFrameValue;
				};
				Neck: Motor6D & {
					DefaultC1: CFrameValue;
				};
				["Left Hip"]: Motor6D & {
					DefaultC1: CFrameValue;
				};
				["Right Hip"]: Motor6D & {
					DefaultC1: CFrameValue;
				};
				["Left Shoulder"]: Motor6D & {
					DefaultC1: CFrameValue;
				};
			};
			HumanoidRootPart: Part;
			["Right Arm"]: Part & {
				MeshPart: MeshPart;
				["Glove Left"]: MeshPart;
				Mesh1: MeshPart;
			};
			["Left Arm"]: Part & {
				MeshPart: MeshPart;
				["Glove Left"]: MeshPart;
				Mesh1: MeshPart;
			};
			["Body Colors"]: BodyColors;
		};
		["Gravels, Sands, Pebbles"]: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		["(for that gun)"]: Model & {
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
					Middle: Part;
					plateminus: MeshPart & {
						Weld: ManualWeld;
					};
				};
				["Right Shoulder"]: Motor6D & {
					DefaultC1: CFrameValue;
				};
				Neck: Motor6D & {
					DefaultC1: CFrameValue;
				};
				["Right Hip"]: Motor6D & {
					DefaultC1: CFrameValue;
				};
				["Left Hip"]: Motor6D & {
					DefaultC1: CFrameValue;
				};
				["Left Shoulder"]: Motor6D & {
					DefaultC1: CFrameValue;
				};
			};
			HumanoidRootPart: Part & {
				["Root Hip"]: Motor6D & {
					DefaultC1: CFrameValue;
				};
			};
			["Right Arm"]: Part & {
				MeshPart: MeshPart;
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
				["Glove Left"]: MeshPart;
				Mesh1: MeshPart;
			};
			["Body Colors"]: BodyColors;
		};
		["Large Noop Spawner + Energy Tanks"]: Model & {
			["Large Noob Spawner"]: Model & {
				Part: Part;
				["Spawn Part"]: Part & {
					["spawn decal"]: Decal;
				};
			};
		};
		Paint: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		melee: Model & {
			["Left Leg"]: Part & {
				["5"]: MeshPart & {
					Weld: ManualWeld;
				};
				MeshPart: MeshPart;
			};
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			["Right Leg"]: Part & {
				["5"]: MeshPart;
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
					Middle: Part;
					plateminus: MeshPart;
				};
			};
			HumanoidRootPart: Part & {
				["Root Hip"]: Motor6D & {
					DefaultC1: CFrameValue;
				};
			};
			["Right Arm"]: Part & {
				RightGrip: Weld;
				MeshPart: MeshPart & {
					Weld: ManualWeld;
				};
				["Glove Left"]: MeshPart;
				Mesh1: MeshPart & {
					Weld: ManualWeld;
				};
			};
			["Left Arm"]: Part & {
				MeshPart: MeshPart;
				["Glove Left"]: MeshPart;
				Mesh1: MeshPart & {
					Weld: ManualWeld;
				};
			};
			Sword: Tool & {
				Handle: Part & {
					AttachmentMiddle: Attachment;
					TouchInterest: TouchTransmitter;
					MeleeTrail: Trail;
					MeleeTrail2: Trail;
					AttachmentBottom: Attachment;
					GripAttachment: Attachment;
					AttachmentTop: Attachment;
				};
				FEMeleeKitEvents: Folder & {
					Misc: Folder & {
						HandleClang: RemoteEvent;
						EnableChargeBar: RemoteEvent;
						ActivateAttackBlock: BindableEvent;
						RepairWeapon: BindableEvent;
					};
					Input: Folder & {
						SendInput2: RemoteEvent;
						SendInput: RemoteEvent;
						ReleaseInput: RemoteEvent;
					};
					Ability: Folder & {
						GetAbilities: RemoteFunction;
					};
					Charge: Folder & {
						StartCharge: RemoteEvent & {
							StartChargeBE: BindableEvent;
						};
						StartChainsaw: RemoteEvent;
						EndCharge: RemoteEvent & {
							EndChargeBE: BindableEvent;
						};
						EndChainsaw: RemoteEvent;
					};
					Attack: Folder & {
						Initiate_Server: RemoteEvent & {
							Initiate_ServerBE: BindableEvent;
						};
						Attack_Server: RemoteEvent;
						SCRaycastInitiate: RemoteEvent;
					};
				};
				Union: UnionOperation & {
					WeldConstraint: WeldConstraint;
				};
			};
			["Body Colors"]: BodyColors;
		};
		Fur: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		Metal: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		Fabric: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		["Flat Ring Shape Thin"]: MeshPart & {
			Weld: Weld;
		};
		Claw: Tool & {
			FEMeleeKitEvents: Folder & {
				Misc: Folder & {
					HandleClang: RemoteEvent;
					EnableChargeBar: RemoteEvent;
					ActivateAttackBlock: BindableEvent;
					RepairWeapon: BindableEvent;
				};
				Input: Folder & {
					SendInput2: RemoteEvent;
					SendInput: RemoteEvent;
					ReleaseInput: RemoteEvent;
				};
				Ability: Folder & {
					GetAbilities: RemoteFunction;
				};
				Charge: Folder & {
					StartCharge: RemoteEvent & {
						StartChargeBE: BindableEvent;
					};
					StartChainsaw: RemoteEvent;
					EndCharge: RemoteEvent & {
						EndChargeBE: BindableEvent;
					};
					EndChainsaw: RemoteEvent;
				};
				Attack: Folder & {
					Initiate_Server: RemoteEvent & {
						Initiate_ServerBE: BindableEvent;
					};
					Attack_Server: RemoteEvent;
					SCRaycastInitiate: RemoteEvent;
				};
			};
			Handle: Part & {
				TouchInterest: TouchTransmitter;
				MeleeTrail: Trail;
				MeleeTrail2: Trail;
				GripAttachment: Attachment;
			};
		};
		["i dont know"]: Model & {
			["Left Leg"]: Part & {
				["5"]: MeshPart;
				MeshPart: MeshPart;
			};
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			["Right Leg"]: Part & {
				["5"]: MeshPart;
				MeshPart: MeshPart;
			};
			Head: Part & {
				Mesh: SpecialMesh;
				Decal: Decal;
			};
			Torso: Part & {
				Chest: Model & {
					Middle: Part;
					plateminus: MeshPart;
				};
			};
			HumanoidRootPart: Part;
			["Right Arm"]: Part & {
				MeshPart: MeshPart;
				["Glove Left"]: MeshPart;
				Mesh1: MeshPart;
			};
			["Left Arm"]: Part & {
				MeshPart: MeshPart;
				["Glove Left"]: MeshPart;
				Mesh1: MeshPart & {
					Weld: ManualWeld;
				};
			};
			Script: Script & {
				Animation: Animation;
			};
			AnimSaves: Model & {
				["I uh, tried"]: KeyframeSequence;
				h: KeyframeSequence;
				["Automatic Save"]: KeyframeSequence;
				["Temp - imported anim of mine"]: KeyframeSequence;
			};
			["Body Colors"]: BodyColors;
		};
		bow: Model & {
			animate: Part;
		};
		Script: Script;
		Fire: Part;
		Sledgehammer: Model;
		["Jetpack Zombie"]: Model & {
			["Left Leg"]: Part & {
				Script: Script;
			};
			["Right Leg"]: Part & {
				Script: Script;
			};
			Torso: Part & {
				["Left Shoulder"]: Motor;
				["Right Shoulder"]: Motor;
				Neck: Snap;
				["Right Hip"]: Motor;
				["Left Hip"]: Motor;
				BodyPosition: BodyPosition;
			};
			Range: BoolValue;
			Target: ObjectValue;
			Sound: Script;
			Zombie: Humanoid;
			RocketLauncher: Tool & {
				Swoosh: Sound;
				["Server Launcher"]: Script;
				RocketScript: Script;
				Explosion: Sound;
				Handle: Part & {
					Mesh: SpecialMesh;
					Swoosh: Sound;
				};
			};
			ChaseScript: Script;
			Die: Script & {
				qPerfectionWeld: Script;
			};
			TakeJetpack: Model & {
				Jetpack: Model & {
					Jetpack: MeshPart & {
						Boost: Sound;
						Light: Motor6D;
						WeldConstraint: WeldConstraint;
					};
					Light: MeshPart;
				};
			};
			["Body Colors"]: BodyColors;
			["Right Arm"]: Part & {
				RightGrip: Weld;
			};
			["Left Arm"]: Part;
			TEAM: BrickColorValue;
			Animate: Script & {
				jump: StringValue & {
					JumpAnim: Animation;
				};
				idle: StringValue & {
					Animation2: Animation & {
						Weight: NumberValue;
					};
					Animation1: Animation & {
						Weight: NumberValue;
					};
				};
				climb: StringValue & {
					ClimbAnim: Animation;
				};
				toolnone: StringValue & {
					ToolNoneAnim: Animation;
				};
				fall: StringValue & {
					FallAnim: Animation & {
						qPerfectionWeld: Script;
					};
				};
				run: StringValue & {
					RunAnim: Animation;
				};
				walk: StringValue & {
					WalkAnim: Animation;
				};
			};
			Head: Part & {
				Mesh: SpecialMesh;
				Decal: Decal;
			};
			Attack: BoolValue;
		};
		Foliage: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		Sword: Tool & {
			Handle: Part & {
				AttachmentMiddle: Attachment;
				TouchInterest: TouchTransmitter;
				MeleeTrail: Trail;
				MeleeTrail2: Trail;
				AttachmentBottom: Attachment;
				GripAttachment: Attachment;
				AttachmentTop: Attachment;
			};
			FEMeleeKitEvents: Folder & {
				Misc: Folder & {
					HandleClang: RemoteEvent;
					EnableChargeBar: RemoteEvent;
					ActivateAttackBlock: BindableEvent;
					RepairWeapon: BindableEvent;
				};
				Input: Folder & {
					SendInput2: RemoteEvent;
					SendInput: RemoteEvent;
					ReleaseInput: RemoteEvent;
				};
				Ability: Folder & {
					GetAbilities: RemoteFunction;
				};
				Charge: Folder & {
					StartCharge: RemoteEvent & {
						StartChargeBE: BindableEvent;
					};
					StartChainsaw: RemoteEvent;
					EndCharge: RemoteEvent & {
						EndChargeBE: BindableEvent;
					};
					EndChainsaw: RemoteEvent;
				};
				Attack: Folder & {
					Initiate_Server: RemoteEvent & {
						Initiate_ServerBE: BindableEvent;
					};
					Attack_Server: RemoteEvent;
					SCRaycastInitiate: RemoteEvent;
				};
			};
			Union: UnionOperation & {
				WeldConstraint: WeldConstraint;
			};
		};
		Carpet: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		Earth: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		Bat: Tool & {
			Handle: Part & {
				AttachmentMiddle: Attachment;
				TouchInterest: TouchTransmitter;
				MeleeTrail: Trail;
				MeleeTrail2: Trail;
				AttachmentBottom: Attachment;
				GripAttachment: Attachment;
				AttachmentTop: Attachment;
			};
			FEMeleeKitEvents: Folder & {
				Misc: Folder & {
					HandleClang: RemoteEvent;
					EnableChargeBar: RemoteEvent;
					ActivateAttackBlock: BindableEvent;
					RepairWeapon: BindableEvent;
				};
				Input: Folder & {
					SendInput2: RemoteEvent;
					SendInput: RemoteEvent;
					ReleaseInput: RemoteEvent;
				};
				Ability: Folder & {
					GetAbilities: RemoteFunction;
				};
				Charge: Folder & {
					StartCharge: RemoteEvent & {
						StartChargeBE: BindableEvent;
					};
					StartChainsaw: RemoteEvent;
					EndCharge: RemoteEvent & {
						EndChargeBE: BindableEvent;
					};
					EndChainsaw: RemoteEvent;
				};
				Attack: Folder & {
					Initiate_Server: RemoteEvent & {
						Initiate_ServerBE: BindableEvent;
					};
					Attack_Server: RemoteEvent;
					SCRaycastInitiate: RemoteEvent;
				};
			};
		};
		Roofing: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		["Pickaxe Prop"]: Model & {
			bottom: Part;
			middle: Part;
			head: MeshPart;
		};
		["Interior Tiles and Bricks"]: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		Retard: Part & {
			Attachment0: Attachment;
		};
		Marble: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		["Exterior Tiles and Bricks"]: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		["Interior Woods"]: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		["Exterior Woods"]: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		Pickaxe: Model & {
			Handle: Part;
			bottom: Part;
			middle: Part;
			head: MeshPart;
		};
		["Wood Chair"]: Model & {
			Seat: Seat;
		};
		["I AM GOING TO COMMIT MARKET GARDENING"]: Model & {
			Handle: MeshPart & {
				MeshPart2: Motor6D;
			};
			MeshPart2: MeshPart;
		};
		Scales: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
		["deimos plushie"]: Model & {
			["Deimos Top"]: Model & {
				["Torso Belt"]: Model & {
					Union: UnionOperation;
				};
				Shirt: Model & {
					["Left ShirtPart"]: Part;
					["Right ShirtPart"]: Part;
				};
				Radio: Model;
				Wedge: WedgePart & {
					Mesh: SpecialMesh;
				};
			};
			["Plushie Rig"]: Model & {
				["Left Leg"]: UnionOperation;
				["Right Arm"]: Part;
				Head: UnionOperation;
				Torso: Part;
				["Right Leg"]: UnionOperation;
				["Left Arm"]: Part;
			};
			["Deimos Head"]: Model & {
				["Deimos Visor"]: Model;
				Bandages: UnionOperation;
				["Deimos Headphones"]: Model;
			};
		};
		Gate: Model & {
			Union: UnionOperation;
			Door: Model;
		};
		Projectile: Model & {
			["Meshes/Cone"]: MeshPart;
			Part: Part;
		};
		["30% Energy Tank"]: Model & {
			Glass: Part;
			Energy: Part;
			Model: Model & {
				Part: Part;
				Union: UnionOperation;
			};
		};
		Energy: Part;
		Wallpapers: Model & {
			Humanoid: Humanoid;
			Head: Part;
		};
	};
	Camera: Camera;
	["Square w round edge"]: MeshPart & {
		Weld: Weld;
	};
	["Spawn Part"]: UnionOperation & {
		Decal: Decal;
		Weld: Weld;
	};
	Game: Folder & {
		Human: Folder & {
			Base: Model & {
				Part: Part & {
					Weld: Weld;
				};
			};
			Spawns: Folder;
		};
		Lobby: Folder & {
			Map: Folder & {
				["Large Noop Spawner + Energy Tanks"]: Model & {
					["Large Noob Spawner"]: Model & {
						Part: Part;
						["Spawn Part"]: Part & {
							["spawn decal"]: Decal;
						};
					};
				};
				fist: Model & {
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
						["Left Shoulder"]: Motor6D & {
							DefaultC1: CFrameValue;
						};
						["Right Shoulder"]: Motor6D & {
							DefaultC1: CFrameValue;
						};
						Neck: Motor6D & {
							DefaultC1: CFrameValue;
						};
						["Right Hip"]: Motor6D & {
							DefaultC1: CFrameValue;
						};
						["Left Hip"]: Motor6D & {
							DefaultC1: CFrameValue;
						};
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
						Handle: Part & {
							Mesh: SpecialMesh;
							Weld: ManualWeld;
						};
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
					Script: Script & {
						Animation: Animation;
					};
					AnimSaves: Model & {
						["Automatic Save"]: KeyframeSequence;
						h: KeyframeSequence;
						["I uh, tried"]: KeyframeSequence;
						["Temp - imported anim of mine"]: KeyframeSequence;
					};
					["Body Colors"]: BodyColors;
				};
				Turret: Model;
				Shelf: Model & {
					Union: UnionOperation;
					["Shelf Holder"]: UnionOperation;
				};
				Base: Model & {
					Model: Model & {
						Union: UnionOperation;
					};
				};
			};
			Pods: Folder & {
				Model: Model & {
					Union: UnionOperation;
					Pod_Hitbox: Part;
					Pod: Model & {
						Model: Model;
						thing: Model & {
							Union: UnionOperation;
						};
						door: Model & {
							Union: UnionOperation;
						};
					};
					Base: Model;
				};
			};
			Spawns: Folder & {
				Part: Part;
			};
		};
		Zombie: Folder & {
			Base: Model & {
				Part: Part & {
					Weld: Weld;
				};
			};
			Spawns: Folder;
		};
	};
	Realism: Folder;
	_CPData: Backpack;
	Base: Model;
}

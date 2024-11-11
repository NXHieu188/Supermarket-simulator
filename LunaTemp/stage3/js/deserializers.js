var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointSpring' )
  var i657 = data
  i656.spring = i657[0]
  i656.damper = i657[1]
  i656.targetPosition = i657[2]
  return i656
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointMotor' )
  var i659 = data
  i658.m_TargetVelocity = i659[0]
  i658.m_Force = i659[1]
  i658.m_FreeSpin = i659[2]
  return i658
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointLimits' )
  var i661 = data
  i660.m_Min = i661[0]
  i660.m_Max = i661[1]
  i660.m_Bounciness = i661[2]
  i660.m_BounceMinVelocity = i661[3]
  i660.m_ContactDistance = i661[4]
  i660.minBounce = i661[5]
  i660.maxBounce = i661[6]
  return i660
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointDrive' )
  var i663 = data
  i662.m_PositionSpring = i663[0]
  i662.m_PositionDamper = i663[1]
  i662.m_MaximumForce = i663[2]
  return i662
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i665 = data
  i664.m_Spring = i665[0]
  i664.m_Damper = i665[1]
  return i664
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i667 = data
  i666.m_Limit = i667[0]
  i666.m_Bounciness = i667[1]
  i666.m_ContactDistance = i667[2]
  return i666
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i669 = data
  i668.m_ExtremumSlip = i669[0]
  i668.m_ExtremumValue = i669[1]
  i668.m_AsymptoteSlip = i669[2]
  i668.m_AsymptoteValue = i669[3]
  i668.m_Stiffness = i669[4]
  return i668
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i671 = data
  i670.m_LowerAngle = i671[0]
  i670.m_UpperAngle = i671[1]
  return i670
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i673 = data
  i672.m_MotorSpeed = i673[0]
  i672.m_MaximumMotorTorque = i673[1]
  return i672
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i675 = data
  i674.m_DampingRatio = i675[0]
  i674.m_Frequency = i675[1]
  i674.m_Angle = i675[2]
  return i674
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i677 = data
  i676.m_LowerTranslation = i677[0]
  i676.m_UpperTranslation = i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i679 = data
  i678.name = i679[0]
  i678.halfPrecision = !!i679[1]
  i678.useUInt32IndexFormat = !!i679[2]
  i678.vertexCount = i679[3]
  i678.aabb = i679[4]
  var i681 = i679[5]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( !!i681[i + 0] );
  }
  i678.streams = i680
  i678.vertices = i679[6]
  var i683 = i679[7]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i683[i + 0]) );
  }
  i678.subMeshes = i682
  var i685 = i679[8]
  var i684 = []
  for(var i = 0; i < i685.length; i += 16) {
    i684.push( new pc.Mat4().setData(i685[i + 0], i685[i + 1], i685[i + 2], i685[i + 3],  i685[i + 4], i685[i + 5], i685[i + 6], i685[i + 7],  i685[i + 8], i685[i + 9], i685[i + 10], i685[i + 11],  i685[i + 12], i685[i + 13], i685[i + 14], i685[i + 15]) );
  }
  i678.bindposes = i684
  var i687 = i679[9]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i687[i + 0]) );
  }
  i678.blendShapes = i686
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i693 = data
  i692.triangles = i693[0]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i699 = data
  i698.name = i699[0]
  var i701 = i699[1]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i701[i + 0]) );
  }
  i698.frames = i700
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i702 = root || new pc.UnityMaterial()
  var i703 = data
  i702.name = i703[0]
  request.r(i703[1], i703[2], 0, i702, 'shader')
  i702.renderQueue = i703[3]
  i702.enableInstancing = !!i703[4]
  var i705 = i703[5]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i705[i + 0]) );
  }
  i702.floatParameters = i704
  var i707 = i703[6]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i707[i + 0]) );
  }
  i702.colorParameters = i706
  var i709 = i703[7]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i709[i + 0]) );
  }
  i702.vectorParameters = i708
  var i711 = i703[8]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i711[i + 0]) );
  }
  i702.textureParameters = i710
  var i713 = i703[9]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i713[i + 0]) );
  }
  i702.materialFlags = i712
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i717 = data
  i716.name = i717[0]
  i716.value = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i721 = data
  i720.name = i721[0]
  i720.value = new pc.Color(i721[1], i721[2], i721[3], i721[4])
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i725 = data
  i724.name = i725[0]
  i724.value = new pc.Vec4( i725[1], i725[2], i725[3], i725[4] )
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i729 = data
  i728.name = i729[0]
  request.r(i729[1], i729[2], 0, i728, 'value')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i733 = data
  i732.name = i733[0]
  i732.enabled = !!i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i735 = data
  i734.name = i735[0]
  i734.width = i735[1]
  i734.height = i735[2]
  i734.mipmapCount = i735[3]
  i734.anisoLevel = i735[4]
  i734.filterMode = i735[5]
  i734.hdr = !!i735[6]
  i734.format = i735[7]
  i734.wrapMode = i735[8]
  i734.alphaIsTransparency = !!i735[9]
  i734.alphaSource = i735[10]
  i734.graphicsFormat = i735[11]
  i734.sRGBTexture = !!i735[12]
  i734.desiredColorSpace = i735[13]
  i734.wrapU = i735[14]
  i734.wrapV = i735[15]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i737 = data
  i736.position = new pc.Vec3( i737[0], i737[1], i737[2] )
  i736.scale = new pc.Vec3( i737[3], i737[4], i737[5] )
  i736.rotation = new pc.Quat(i737[6], i737[7], i737[8], i737[9])
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'sharedMesh')
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'additionalVertexStreams')
  i740.enabled = !!i741[2]
  request.r(i741[3], i741[4], 0, i740, 'sharedMaterial')
  var i743 = i741[5]
  var i742 = []
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 2, i742, '')
  }
  i740.sharedMaterials = i742
  i740.receiveShadows = !!i741[6]
  i740.shadowCastingMode = i741[7]
  i740.sortingLayerID = i741[8]
  i740.sortingOrder = i741[9]
  i740.lightmapIndex = i741[10]
  i740.lightmapSceneIndex = i741[11]
  i740.lightmapScaleOffset = new pc.Vec4( i741[12], i741[13], i741[14], i741[15] )
  i740.lightProbeUsage = i741[16]
  i740.reflectionProbeUsage = i741[17]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i747 = data
  i746.name = i747[0]
  i746.tagId = i747[1]
  i746.enabled = !!i747[2]
  i746.isStatic = !!i747[3]
  i746.layer = i747[4]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i749 = data
  i748.name = i749[0]
  i748.atlasId = i749[1]
  i748.mipmapCount = i749[2]
  i748.hdr = !!i749[3]
  i748.size = i749[4]
  i748.anisoLevel = i749[5]
  i748.filterMode = i749[6]
  var i751 = i749[7]
  var i750 = []
  for(var i = 0; i < i751.length; i += 4) {
    i750.push( UnityEngine.Rect.MinMaxRect(i751[i + 0], i751[i + 1], i751[i + 2], i751[i + 3]) );
  }
  i748.rects = i750
  i748.wrapU = i749[8]
  i748.wrapV = i749[9]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i755 = data
  i754.name = i755[0]
  i754.index = i755[1]
  i754.startup = !!i755[2]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i757 = data
  i756.enabled = !!i757[0]
  i756.aspect = i757[1]
  i756.orthographic = !!i757[2]
  i756.orthographicSize = i757[3]
  i756.backgroundColor = new pc.Color(i757[4], i757[5], i757[6], i757[7])
  i756.nearClipPlane = i757[8]
  i756.farClipPlane = i757[9]
  i756.fieldOfView = i757[10]
  i756.depth = i757[11]
  i756.clearFlags = i757[12]
  i756.cullingMask = i757[13]
  i756.rect = i757[14]
  request.r(i757[15], i757[16], 0, i756, 'targetTexture')
  i756.usePhysicalProperties = !!i757[17]
  i756.focalLength = i757[18]
  i756.sensorSize = new pc.Vec2( i757[19], i757[20] )
  i756.lensShift = new pc.Vec2( i757[21], i757[22] )
  i756.gateFit = i757[23]
  return i756
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i758 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i759 = data
  i758.m_ShowDebugText = !!i759[0]
  i758.m_ShowCameraFrustum = !!i759[1]
  i758.m_IgnoreTimeScale = !!i759[2]
  request.r(i759[3], i759[4], 0, i758, 'm_WorldUpOverride')
  i758.m_UpdateMethod = i759[5]
  i758.m_BlendUpdateMethod = i759[6]
  i758.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i759[7], i758.m_DefaultBlend)
  request.r(i759[8], i759[9], 0, i758, 'm_CustomBlends')
  i758.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i759[10], i758.m_CameraCutEvent)
  i758.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i759[11], i758.m_CameraActivatedEvent)
  return i758
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i760 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i761 = data
  i760.m_Style = i761[0]
  i760.m_Time = i761[1]
  i760.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i761[2] } )
  return i760
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i762 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i763 = data
  i762.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i763[0], i762.m_PersistentCalls)
  return i762
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i765 = data
  var i767 = i765[0]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('UnityEngine.Events.PersistentCall', i767[i + 0]));
  }
  i764.m_Calls = i766
  return i764
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'm_Target')
  i770.m_TargetAssemblyTypeName = i771[2]
  i770.m_MethodName = i771[3]
  i770.m_Mode = i771[4]
  i770.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i771[5], i770.m_Arguments)
  i770.m_CallState = i771[6]
  return i770
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i772 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i773 = data
  i772.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i773[0], i772.m_PersistentCalls)
  return i772
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i774 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'm_LookAt')
  request.r(i775[2], i775[3], 0, i774, 'm_Follow')
  i774.m_Lens = request.d('Cinemachine.LensSettings', i775[4], i774.m_Lens)
  i774.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i775[5], i774.m_Transitions)
  var i777 = i775[6]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i774.m_ExcludedPropertiesInInspector = i776
  var i779 = i775[7]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i774.m_LockStageInInspector = i778
  i774.m_Priority = i775[8]
  i774.m_StandbyUpdate = i775[9]
  i774.m_LegacyBlendHint = i775[10]
  request.r(i775[11], i775[12], 0, i774, 'm_ComponentOwner')
  i774.m_StreamingVersion = i775[13]
  return i774
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i780 = root || request.c( 'Cinemachine.LensSettings' )
  var i781 = data
  i780.FieldOfView = i781[0]
  i780.OrthographicSize = i781[1]
  i780.NearClipPlane = i781[2]
  i780.FarClipPlane = i781[3]
  i780.Dutch = i781[4]
  i780.ModeOverride = i781[5]
  i780.LensShift = new pc.Vec2( i781[6], i781[7] )
  i780.GateFit = i781[8]
  i780.m_SensorSize = new pc.Vec2( i781[9], i781[10] )
  return i780
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i782 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i783 = data
  i782.m_BlendHint = i783[0]
  i782.m_InheritPosition = !!i783[1]
  i782.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i783[2], i782.m_OnCameraLive)
  return i782
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i788 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i789 = data
  return i788
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i790 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i791 = data
  i790.m_TrackedObjectOffset = new pc.Vec3( i791[0], i791[1], i791[2] )
  i790.m_LookaheadTime = i791[3]
  i790.m_LookaheadSmoothing = i791[4]
  i790.m_LookaheadIgnoreY = !!i791[5]
  i790.m_HorizontalDamping = i791[6]
  i790.m_VerticalDamping = i791[7]
  i790.m_ScreenX = i791[8]
  i790.m_ScreenY = i791[9]
  i790.m_DeadZoneWidth = i791[10]
  i790.m_DeadZoneHeight = i791[11]
  i790.m_SoftZoneWidth = i791[12]
  i790.m_SoftZoneHeight = i791[13]
  i790.m_BiasX = i791[14]
  i790.m_BiasY = i791[15]
  i790.m_CenterOnActivate = !!i791[16]
  return i790
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i792 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i793 = data
  i792.m_BindingMode = i793[0]
  i792.m_FollowOffset = new pc.Vec3( i793[1], i793[2], i793[3] )
  i792.m_XDamping = i793[4]
  i792.m_YDamping = i793[5]
  i792.m_ZDamping = i793[6]
  i792.m_AngularDampingMode = i793[7]
  i792.m_PitchDamping = i793[8]
  i792.m_YawDamping = i793[9]
  i792.m_RollDamping = i793[10]
  i792.m_AngularDamping = i793[11]
  return i792
}

Deserializers["Cinemachine.CinemachineFramingTransposer"] = function (request, data, root) {
  var i794 = root || request.c( 'Cinemachine.CinemachineFramingTransposer' )
  var i795 = data
  i794.m_TrackedObjectOffset = new pc.Vec3( i795[0], i795[1], i795[2] )
  i794.m_LookaheadTime = i795[3]
  i794.m_LookaheadSmoothing = i795[4]
  i794.m_LookaheadIgnoreY = !!i795[5]
  i794.m_XDamping = i795[6]
  i794.m_YDamping = i795[7]
  i794.m_ZDamping = i795[8]
  i794.m_TargetMovementOnly = !!i795[9]
  i794.m_ScreenX = i795[10]
  i794.m_ScreenY = i795[11]
  i794.m_CameraDistance = i795[12]
  i794.m_DeadZoneWidth = i795[13]
  i794.m_DeadZoneHeight = i795[14]
  i794.m_DeadZoneDepth = i795[15]
  i794.m_UnlimitedSoftZone = !!i795[16]
  i794.m_SoftZoneWidth = i795[17]
  i794.m_SoftZoneHeight = i795[18]
  i794.m_BiasX = i795[19]
  i794.m_BiasY = i795[20]
  i794.m_CenterOnActivate = !!i795[21]
  i794.m_GroupFramingMode = i795[22]
  i794.m_AdjustmentMode = i795[23]
  i794.m_GroupFramingSize = i795[24]
  i794.m_MaxDollyIn = i795[25]
  i794.m_MaxDollyOut = i795[26]
  i794.m_MinimumDistance = i795[27]
  i794.m_MaximumDistance = i795[28]
  i794.m_MinimumFOV = i795[29]
  i794.m_MaximumFOV = i795[30]
  i794.m_MinimumOrthoSize = i795[31]
  i794.m_MaximumOrthoSize = i795[32]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i797 = data
  i796.enabled = !!i797[0]
  i796.type = i797[1]
  i796.color = new pc.Color(i797[2], i797[3], i797[4], i797[5])
  i796.cullingMask = i797[6]
  i796.intensity = i797[7]
  i796.range = i797[8]
  i796.spotAngle = i797[9]
  i796.shadows = i797[10]
  i796.shadowNormalBias = i797[11]
  i796.shadowBias = i797[12]
  i796.shadowStrength = i797[13]
  i796.shadowResolution = i797[14]
  i796.lightmapBakeType = i797[15]
  i796.renderMode = i797[16]
  request.r(i797[17], i797[18], 0, i796, 'cookie')
  i796.cookieSize = i797[19]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i799 = data
  i798.center = new pc.Vec3( i799[0], i799[1], i799[2] )
  i798.size = new pc.Vec3( i799[3], i799[4], i799[5] )
  i798.enabled = !!i799[6]
  i798.isTrigger = !!i799[7]
  request.r(i799[8], i799[9], 0, i798, 'material')
  return i798
}

Deserializers["ShelfGuide"] = function (request, data, root) {
  var i800 = root || request.c( 'ShelfGuide' )
  var i801 = data
  i800.scale = new pc.Vec3( i801[0], i801[1], i801[2] )
  request.r(i801[3], i801[4], 0, i800, 'boxColider')
  request.r(i801[5], i801[6], 0, i800, 'shelf')
  request.r(i801[7], i801[8], 0, i800, 'price')
  request.r(i801[9], i801[10], 0, i800, 'tu')
  i800.isDone = !!i801[11]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'animatorController')
  request.r(i803[2], i803[3], 0, i802, 'avatar')
  i802.updateMode = i803[4]
  i802.hasTransformHierarchy = !!i803[5]
  i802.applyRootMotion = !!i803[6]
  var i805 = i803[7]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.humanBones = i804
  i802.enabled = !!i803[8]
  return i802
}

Deserializers["Animal"] = function (request, data, root) {
  var i808 = root || request.c( 'Animal' )
  var i809 = data
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i811 = data
  i810.enabled = !!i811[0]
  request.r(i811[1], i811[2], 0, i810, 'sharedMaterial')
  var i813 = i811[3]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.sharedMaterials = i812
  i810.receiveShadows = !!i811[4]
  i810.shadowCastingMode = i811[5]
  i810.sortingLayerID = i811[6]
  i810.sortingOrder = i811[7]
  i810.lightmapIndex = i811[8]
  i810.lightmapSceneIndex = i811[9]
  i810.lightmapScaleOffset = new pc.Vec4( i811[10], i811[11], i811[12], i811[13] )
  i810.lightProbeUsage = i811[14]
  i810.reflectionProbeUsage = i811[15]
  request.r(i811[16], i811[17], 0, i810, 'sharedMesh')
  var i815 = i811[18]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i810.bones = i814
  i810.updateWhenOffscreen = !!i811[19]
  i810.localBounds = i811[20]
  request.r(i811[21], i811[22], 0, i810, 'rootBone')
  var i817 = i811[23]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i817[i + 0]) );
  }
  i810.blendShapesWeights = i816
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i821 = data
  i820.weight = i821[0]
  return i820
}

Deserializers["DoTweenMove"] = function (request, data, root) {
  var i822 = root || request.c( 'DoTweenMove' )
  var i823 = data
  i822.targetPos = new pc.Vec3( i823[0], i823[1], i823[2] )
  i822.duration = i823[3]
  i822.setLoop = !!i823[4]
  i822.doLocal = !!i823[5]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i825 = data
  i824.pivot = new pc.Vec2( i825[0], i825[1] )
  i824.anchorMin = new pc.Vec2( i825[2], i825[3] )
  i824.anchorMax = new pc.Vec2( i825[4], i825[5] )
  i824.sizeDelta = new pc.Vec2( i825[6], i825[7] )
  i824.anchoredPosition3D = new pc.Vec3( i825[8], i825[9], i825[10] )
  i824.rotation = new pc.Quat(i825[11], i825[12], i825[13], i825[14])
  i824.scale = new pc.Vec3( i825[15], i825[16], i825[17] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i827 = data
  i826.enabled = !!i827[0]
  i826.planeDistance = i827[1]
  i826.referencePixelsPerUnit = i827[2]
  i826.isFallbackOverlay = !!i827[3]
  i826.renderMode = i827[4]
  i826.renderOrder = i827[5]
  i826.sortingLayerName = i827[6]
  i826.sortingOrder = i827[7]
  i826.scaleFactor = i827[8]
  request.r(i827[9], i827[10], 0, i826, 'worldCamera')
  i826.overrideSorting = !!i827[11]
  i826.pixelPerfect = !!i827[12]
  i826.targetDisplay = i827[13]
  i826.overridePixelPerfect = !!i827[14]
  return i826
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i829 = data
  i828.m_UiScaleMode = i829[0]
  i828.m_ReferencePixelsPerUnit = i829[1]
  i828.m_ScaleFactor = i829[2]
  i828.m_ReferenceResolution = new pc.Vec2( i829[3], i829[4] )
  i828.m_ScreenMatchMode = i829[5]
  i828.m_MatchWidthOrHeight = i829[6]
  i828.m_PhysicalUnit = i829[7]
  i828.m_FallbackScreenDPI = i829[8]
  i828.m_DefaultSpriteDPI = i829[9]
  i828.m_DynamicPixelsPerUnit = i829[10]
  i828.m_PresetInfoIsWorld = !!i829[11]
  return i828
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i831 = data
  i830.m_IgnoreReversedGraphics = !!i831[0]
  i830.m_BlockingObjects = i831[1]
  i830.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i831[2] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i833 = data
  i832.cullTransparentMesh = !!i833[0]
  return i832
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.Image' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'm_Sprite')
  i834.m_Type = i835[2]
  i834.m_PreserveAspect = !!i835[3]
  i834.m_FillCenter = !!i835[4]
  i834.m_FillMethod = i835[5]
  i834.m_FillAmount = i835[6]
  i834.m_FillClockwise = !!i835[7]
  i834.m_FillOrigin = i835[8]
  i834.m_UseSpriteMesh = !!i835[9]
  i834.m_PixelsPerUnitMultiplier = i835[10]
  request.r(i835[11], i835[12], 0, i834, 'm_Material')
  i834.m_Maskable = !!i835[13]
  i834.m_Color = new pc.Color(i835[14], i835[15], i835[16], i835[17])
  i834.m_RaycastTarget = !!i835[18]
  i834.m_RaycastPadding = new pc.Vec4( i835[19], i835[20], i835[21], i835[22] )
  return i834
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i837 = data
  i836.m_hasFontAssetChanged = !!i837[0]
  request.r(i837[1], i837[2], 0, i836, 'm_baseMaterial')
  i836.m_maskOffset = new pc.Vec4( i837[3], i837[4], i837[5], i837[6] )
  i836.m_text = i837[7]
  i836.m_isRightToLeft = !!i837[8]
  request.r(i837[9], i837[10], 0, i836, 'm_fontAsset')
  request.r(i837[11], i837[12], 0, i836, 'm_sharedMaterial')
  var i839 = i837[13]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.m_fontSharedMaterials = i838
  request.r(i837[14], i837[15], 0, i836, 'm_fontMaterial')
  var i841 = i837[16]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i836.m_fontMaterials = i840
  i836.m_fontColor32 = UnityEngine.Color32.ConstructColor(i837[17], i837[18], i837[19], i837[20])
  i836.m_fontColor = new pc.Color(i837[21], i837[22], i837[23], i837[24])
  i836.m_enableVertexGradient = !!i837[25]
  i836.m_colorMode = i837[26]
  i836.m_fontColorGradient = request.d('TMPro.VertexGradient', i837[27], i836.m_fontColorGradient)
  request.r(i837[28], i837[29], 0, i836, 'm_fontColorGradientPreset')
  request.r(i837[30], i837[31], 0, i836, 'm_spriteAsset')
  i836.m_tintAllSprites = !!i837[32]
  request.r(i837[33], i837[34], 0, i836, 'm_StyleSheet')
  i836.m_TextStyleHashCode = i837[35]
  i836.m_overrideHtmlColors = !!i837[36]
  i836.m_faceColor = UnityEngine.Color32.ConstructColor(i837[37], i837[38], i837[39], i837[40])
  i836.m_fontSize = i837[41]
  i836.m_fontSizeBase = i837[42]
  i836.m_fontWeight = i837[43]
  i836.m_enableAutoSizing = !!i837[44]
  i836.m_fontSizeMin = i837[45]
  i836.m_fontSizeMax = i837[46]
  i836.m_fontStyle = i837[47]
  i836.m_HorizontalAlignment = i837[48]
  i836.m_VerticalAlignment = i837[49]
  i836.m_textAlignment = i837[50]
  i836.m_characterSpacing = i837[51]
  i836.m_wordSpacing = i837[52]
  i836.m_lineSpacing = i837[53]
  i836.m_lineSpacingMax = i837[54]
  i836.m_paragraphSpacing = i837[55]
  i836.m_charWidthMaxAdj = i837[56]
  i836.m_enableWordWrapping = !!i837[57]
  i836.m_wordWrappingRatios = i837[58]
  i836.m_overflowMode = i837[59]
  request.r(i837[60], i837[61], 0, i836, 'm_linkedTextComponent')
  request.r(i837[62], i837[63], 0, i836, 'parentLinkedComponent')
  i836.m_enableKerning = !!i837[64]
  i836.m_enableExtraPadding = !!i837[65]
  i836.checkPaddingRequired = !!i837[66]
  i836.m_isRichText = !!i837[67]
  i836.m_parseCtrlCharacters = !!i837[68]
  i836.m_isOrthographic = !!i837[69]
  i836.m_isCullingEnabled = !!i837[70]
  i836.m_horizontalMapping = i837[71]
  i836.m_verticalMapping = i837[72]
  i836.m_uvLineOffset = i837[73]
  i836.m_geometrySortingOrder = i837[74]
  i836.m_IsTextObjectScaleStatic = !!i837[75]
  i836.m_VertexBufferAutoSizeReduction = !!i837[76]
  i836.m_useMaxVisibleDescender = !!i837[77]
  i836.m_pageToDisplay = i837[78]
  i836.m_margin = new pc.Vec4( i837[79], i837[80], i837[81], i837[82] )
  i836.m_isUsingLegacyAnimationComponent = !!i837[83]
  i836.m_isVolumetricText = !!i837[84]
  request.r(i837[85], i837[86], 0, i836, 'm_Material')
  i836.m_Maskable = !!i837[87]
  i836.m_Color = new pc.Color(i837[88], i837[89], i837[90], i837[91])
  i836.m_RaycastTarget = !!i837[92]
  i836.m_RaycastPadding = new pc.Vec4( i837[93], i837[94], i837[95], i837[96] )
  return i836
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.VertexGradient' )
  var i843 = data
  i842.topLeft = new pc.Color(i843[0], i843[1], i843[2], i843[3])
  i842.topRight = new pc.Color(i843[4], i843[5], i843[6], i843[7])
  i842.bottomLeft = new pc.Color(i843[8], i843[9], i843[10], i843[11])
  i842.bottomRight = new pc.Color(i843[12], i843[13], i843[14], i843[15])
  return i842
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.Text' )
  var i845 = data
  i844.m_FontData = request.d('UnityEngine.UI.FontData', i845[0], i844.m_FontData)
  i844.m_Text = i845[1]
  request.r(i845[2], i845[3], 0, i844, 'm_Material')
  i844.m_Maskable = !!i845[4]
  i844.m_Color = new pc.Color(i845[5], i845[6], i845[7], i845[8])
  i844.m_RaycastTarget = !!i845[9]
  i844.m_RaycastPadding = new pc.Vec4( i845[10], i845[11], i845[12], i845[13] )
  return i844
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.FontData' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'm_Font')
  i846.m_FontSize = i847[2]
  i846.m_FontStyle = i847[3]
  i846.m_BestFit = !!i847[4]
  i846.m_MinSize = i847[5]
  i846.m_MaxSize = i847[6]
  i846.m_Alignment = i847[7]
  i846.m_AlignByGeometry = !!i847[8]
  i846.m_RichText = !!i847[9]
  i846.m_HorizontalOverflow = i847[10]
  i846.m_VerticalOverflow = i847[11]
  i846.m_LineSpacing = i847[12]
  return i846
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i849 = data
  i848.m_StartCorner = i849[0]
  i848.m_StartAxis = i849[1]
  i848.m_CellSize = new pc.Vec2( i849[2], i849[3] )
  i848.m_Spacing = new pc.Vec2( i849[4], i849[5] )
  i848.m_Constraint = i849[6]
  i848.m_ConstraintCount = i849[7]
  i848.m_Padding = UnityEngine.RectOffset.FromPaddings(i849[8], i849[9], i849[10], i849[11])
  i848.m_ChildAlignment = i849[12]
  return i848
}

Deserializers["ContainerProducttPetShop"] = function (request, data, root) {
  var i850 = root || request.c( 'ContainerProducttPetShop' )
  var i851 = data
  var i853 = i851[0]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('ElementProductPetShop')))
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 1, i852, '')
  }
  i850.lstProduct = i852
  request.r(i851[1], i851[2], 0, i850, 'productData')
  return i850
}

Deserializers["ElementProductPetShop"] = function (request, data, root) {
  var i856 = root || request.c( 'ElementProductPetShop' )
  var i857 = data
  i856.typeProduct = i857[0]
  request.r(i857[1], i857[2], 0, i856, 'icon')
  request.r(i857[3], i857[4], 0, i856, 'productName')
  request.r(i857[5], i857[6], 0, i856, 'companyName')
  request.r(i857[7], i857[8], 0, i856, 'unitPrice')
  request.r(i857[9], i857[10], 0, i856, 'quanity')
  request.r(i857[11], i857[12], 0, i856, 'txtTotalPrice')
  request.r(i857[13], i857[14], 0, i856, 'btnOn')
  request.r(i857[15], i857[16], 0, i856, 'btnOff')
  request.r(i857[17], i857[18], 0, i856, 'btnBuy')
  request.r(i857[19], i857[20], 0, i856, 'btnSub')
  request.r(i857[21], i857[22], 0, i856, 'btnAdd')
  return i856
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.Button' )
  var i859 = data
  i858.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i859[0], i858.m_OnClick)
  i858.m_Navigation = request.d('UnityEngine.UI.Navigation', i859[1], i858.m_Navigation)
  i858.m_Transition = i859[2]
  i858.m_Colors = request.d('UnityEngine.UI.ColorBlock', i859[3], i858.m_Colors)
  i858.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i859[4], i858.m_SpriteState)
  i858.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i859[5], i858.m_AnimationTriggers)
  i858.m_Interactable = !!i859[6]
  request.r(i859[7], i859[8], 0, i858, 'm_TargetGraphic')
  return i858
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i861 = data
  i860.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i861[0], i860.m_PersistentCalls)
  return i860
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_ObjectArgument')
  i862.m_ObjectArgumentAssemblyTypeName = i863[2]
  i862.m_IntArgument = i863[3]
  i862.m_FloatArgument = i863[4]
  i862.m_StringArgument = i863[5]
  i862.m_BoolArgument = !!i863[6]
  return i862
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i865 = data
  i864.m_Mode = i865[0]
  i864.m_WrapAround = !!i865[1]
  request.r(i865[2], i865[3], 0, i864, 'm_SelectOnUp')
  request.r(i865[4], i865[5], 0, i864, 'm_SelectOnDown')
  request.r(i865[6], i865[7], 0, i864, 'm_SelectOnLeft')
  request.r(i865[8], i865[9], 0, i864, 'm_SelectOnRight')
  return i864
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i867 = data
  i866.m_NormalColor = new pc.Color(i867[0], i867[1], i867[2], i867[3])
  i866.m_HighlightedColor = new pc.Color(i867[4], i867[5], i867[6], i867[7])
  i866.m_PressedColor = new pc.Color(i867[8], i867[9], i867[10], i867[11])
  i866.m_SelectedColor = new pc.Color(i867[12], i867[13], i867[14], i867[15])
  i866.m_DisabledColor = new pc.Color(i867[16], i867[17], i867[18], i867[19])
  i866.m_ColorMultiplier = i867[20]
  i866.m_FadeDuration = i867[21]
  return i866
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'm_HighlightedSprite')
  request.r(i869[2], i869[3], 0, i868, 'm_PressedSprite')
  request.r(i869[4], i869[5], 0, i868, 'm_SelectedSprite')
  request.r(i869[6], i869[7], 0, i868, 'm_DisabledSprite')
  return i868
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i871 = data
  i870.m_NormalTrigger = i871[0]
  i870.m_HighlightedTrigger = i871[1]
  i870.m_PressedTrigger = i871[2]
  i870.m_SelectedTrigger = i871[3]
  i870.m_DisabledTrigger = i871[4]
  return i870
}

Deserializers["AnimScaleButton"] = function (request, data, root) {
  var i872 = root || request.c( 'AnimScaleButton' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, '_gScale')
  i872._fromScale = i873[2]
  i872._toScale = i873[3]
  i872._duration = i873[4]
  return i872
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i874 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'skeletonDataAsset')
  i874.initialSkinName = i875[2]
  i874.initialFlipX = !!i875[3]
  i874.initialFlipY = !!i875[4]
  i874.startingAnimation = i875[5]
  i874.startingLoop = !!i875[6]
  i874.timeScale = i875[7]
  i874.freeze = !!i875[8]
  i874.updateWhenInvisible = i875[9]
  i874.unscaledTime = !!i875[10]
  i874.allowMultipleCanvasRenderers = !!i875[11]
  var i877 = i875[12]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 1, i876, '')
  }
  i874.canvasRenderers = i876
  i874.enableSeparatorSlots = !!i875[13]
  i874.updateSeparatorPartLocation = !!i875[14]
  var i879 = i875[15]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( i879[i + 0] );
  }
  i874.separatorSlotNames = i878
  var i881 = i875[16]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 1, i880, '')
  }
  i874.separatorParts = i880
  i874.meshGenerator = request.d('Spine.Unity.MeshGenerator', i875[17], i874.meshGenerator)
  request.r(i875[18], i875[19], 0, i874, 'm_Material')
  i874.m_Maskable = !!i875[20]
  i874.m_Color = new pc.Color(i875[21], i875[22], i875[23], i875[24])
  i874.m_RaycastTarget = !!i875[25]
  i874.m_RaycastPadding = new pc.Vec4( i875[26], i875[27], i875[28], i875[29] )
  return i874
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i886 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i887 = data
  i886.settings = request.d('Spine.Unity.MeshGenerator+Settings', i887[0], i886.settings)
  return i886
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i888 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i889 = data
  i888.useClipping = !!i889[0]
  i888.zSpacing = i889[1]
  i888.pmaVertexColors = !!i889[2]
  i888.tintBlack = !!i889[3]
  i888.canvasGroupTintBlack = !!i889[4]
  i888.calculateTangents = !!i889[5]
  i888.addNormals = !!i889[6]
  i888.immutableTriangles = !!i889[7]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i891 = data
  i890.playAutomatically = !!i891[0]
  request.r(i891[1], i891[2], 0, i890, 'clip')
  var i893 = i891[3]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i890.clips = i892
  i890.wrapMode = i891[4]
  i890.enabled = !!i891[5]
  return i890
}

Deserializers["TouchInput"] = function (request, data, root) {
  var i896 = root || request.c( 'TouchInput' )
  var i897 = data
  return i896
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'm_FirstSelected')
  i898.m_sendNavigationEvents = !!i899[2]
  i898.m_DragThreshold = i899[3]
  return i898
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i901 = data
  i900.m_HorizontalAxis = i901[0]
  i900.m_VerticalAxis = i901[1]
  i900.m_SubmitButton = i901[2]
  i900.m_CancelButton = i901[3]
  i900.m_InputActionsPerSecond = i901[4]
  i900.m_RepeatDelay = i901[5]
  i900.m_ForceModuleActive = !!i901[6]
  i900.m_SendPointerHoverToParent = !!i901[7]
  return i900
}

Deserializers["GameManagerPetShop5"] = function (request, data, root) {
  var i902 = root || request.c( 'GameManagerPetShop5' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'charFollow')
  i902.mission = i903[2]
  request.r(i903[3], i903[4], 0, i902, 'btnThrow')
  request.r(i903[5], i903[6], 0, i902, 'handTut')
  request.r(i903[7], i903[8], 0, i902, 'cinemachineBrain')
  request.r(i903[9], i903[10], 0, i902, 'VC_camFollow')
  var i905 = i903[11]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('ShelfGuide')))
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 1, i904, '')
  }
  i902.lstGuideShelf = i904
  request.r(i903[12], i903[13], 0, i902, 'VC_Start')
  request.r(i903[14], i903[15], 0, i902, 'VC_camLookDown')
  request.r(i903[16], i903[17], 0, i902, 'boxCat')
  request.r(i903[18], i903[19], 0, i902, 'cat')
  request.r(i903[20], i903[21], 0, i902, 'catInBox')
  request.r(i903[22], i903[23], 0, i902, 'VC_camRotateCatCage')
  request.r(i903[24], i903[25], 0, i902, 'matebox')
  request.r(i903[26], i903[27], 0, i902, 'mateboxOL')
  request.r(i903[28], i903[29], 0, i902, 'boxCatMesh')
  i902.isDoneCat = !!i903[30]
  request.r(i903[31], i903[32], 0, i902, 'VC_camMoveToPlaceObj')
  request.r(i903[33], i903[34], 0, i902, 'VC_camMoveToPlaceObj1')
  request.r(i903[35], i903[36], 0, i902, 'VC_camMoveToPlaceObj2')
  i902.isHoldInPlace = !!i903[37]
  i902.delayTime = i903[38]
  request.r(i903[39], i903[40], 0, i902, 'VC_camEndGame')
  request.r(i903[41], i903[42], 0, i902, 'productData')
  request.r(i903[43], i903[44], 0, i902, 'shopping')
  request.r(i903[45], i903[46], 0, i902, 'handGuide')
  request.r(i903[47], i903[48], 0, i902, 'txtMoney')
  request.r(i903[49], i903[50], 0, i902, 'txtMission')
  request.r(i903[51], i903[52], 0, i902, 'missionObj')
  request.r(i903[53], i903[54], 0, i902, 'sliderProgress')
  i902.totalMoney = i903[55]
  request.r(i903[56], i903[57], 0, i902, 'lstPosParent')
  request.r(i903[58], i903[59], 0, i902, 'container')
  request.r(i903[60], i903[61], 0, i902, 'box')
  request.r(i903[62], i903[63], 0, i902, 'btnPlace')
  request.r(i903[64], i903[65], 0, i902, 'parentPosShelf')
  request.r(i903[66], i903[67], 0, i902, 'containerShelf')
  request.r(i903[68], i903[69], 0, i902, 'cameraEnd')
  request.r(i903[70], i903[71], 0, i902, 'readyOpen')
  request.r(i903[72], i903[73], 0, i902, 'btnOpen')
  request.r(i903[74], i903[75], 0, i902, 'arrowOpen')
  request.r(i903[76], i903[77], 0, i902, 'audioManager')
  i902.isEndGame = !!i903[78]
  i902.totalPriceCheckOut = i903[79]
  request.r(i903[80], i903[81], 0, i902, 'txtPerformCheckout')
  request.r(i903[82], i903[83], 0, i902, 'txtTotalMoney')
  request.r(i903[84], i903[85], 0, i902, 'guideClick')
  request.r(i903[86], i903[87], 0, i902, 'hanGuideClick1')
  request.r(i903[88], i903[89], 0, i902, 'hanGuideClick2')
  request.r(i903[90], i903[91], 0, i902, 'hanGuideClick3')
  i902.availableSecondGuide = !!i903[92]
  i902.availableThirtyGuide = !!i903[93]
  request.r(i903[94], i903[95], 0, i902, 'txtTotalPriceCard')
  request.r(i903[96], i903[97], 0, i902, 'checkoutCard')
  request.r(i903[98], i903[99], 0, i902, 'txtReceiveCash')
  request.r(i903[100], i903[101], 0, i902, 'txtTotalPriceCash')
  request.r(i903[102], i903[103], 0, i902, 'txtChangeCash')
  request.r(i903[104], i903[105], 0, i902, 'txtGivingCashDF')
  request.r(i903[106], i903[107], 0, i902, 'txtGivingCash')
  request.r(i903[108], i903[109], 0, i902, 'checkoutCash')
  request.r(i903[110], i903[111], 0, i902, 'dashCard')
  request.r(i903[112], i903[113], 0, i902, 'dashCash')
  request.r(i903[114], i903[115], 0, i902, 'uiChecKOutCard')
  request.r(i903[116], i903[117], 0, i902, 'uiChecKOutCash')
  request.r(i903[118], i903[119], 0, i902, 'currentCustomer')
  return i902
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i908 = root || request.c( 'AudioManager' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'audioSourceFX')
  request.r(i909[2], i909[3], 0, i908, 'audioSourceBG')
  request.r(i909[4], i909[5], 0, i908, 'clipClick')
  request.r(i909[6], i909[7], 0, i908, 'clipScan')
  request.r(i909[8], i909[9], 0, i908, 'clipOpenCash')
  request.r(i909[10], i909[11], 0, i908, 'clipPlace')
  request.r(i909[12], i909[13], 0, i908, 'clipGiveCash')
  request.r(i909[14], i909[15], 0, i908, 'clipGiveCoin')
  request.r(i909[16], i909[17], 0, i908, 'clipCalculator')
  request.r(i909[18], i909[19], 0, i908, 'clipOk')
  request.r(i909[20], i909[21], 0, i908, 'clipWrong')
  request.r(i909[22], i909[23], 0, i908, 'clipMoveBox')
  request.r(i909[24], i909[25], 0, i908, 'clipMeo')
  request.r(i909[26], i909[27], 0, i908, 'clipCorrect')
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'clip')
  request.r(i911[2], i911[3], 0, i910, 'outputAudioMixerGroup')
  i910.playOnAwake = !!i911[4]
  i910.loop = !!i911[5]
  i910.time = i911[6]
  i910.volume = i911[7]
  i910.pitch = i911[8]
  i910.enabled = !!i911[9]
  return i910
}

Deserializers["RaycastShelf"] = function (request, data, root) {
  var i912 = root || request.c( 'RaycastShelf' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'guide')
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i915 = data
  i914.ambientIntensity = i915[0]
  i914.reflectionIntensity = i915[1]
  i914.ambientMode = i915[2]
  i914.ambientLight = new pc.Color(i915[3], i915[4], i915[5], i915[6])
  i914.ambientSkyColor = new pc.Color(i915[7], i915[8], i915[9], i915[10])
  i914.ambientGroundColor = new pc.Color(i915[11], i915[12], i915[13], i915[14])
  i914.ambientEquatorColor = new pc.Color(i915[15], i915[16], i915[17], i915[18])
  i914.fogColor = new pc.Color(i915[19], i915[20], i915[21], i915[22])
  i914.fogEndDistance = i915[23]
  i914.fogStartDistance = i915[24]
  i914.fogDensity = i915[25]
  i914.fog = !!i915[26]
  request.r(i915[27], i915[28], 0, i914, 'skybox')
  i914.fogMode = i915[29]
  var i917 = i915[30]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i917[i + 0]) );
  }
  i914.lightmaps = i916
  i914.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i915[31], i914.lightProbes)
  i914.lightmapsMode = i915[32]
  i914.mixedBakeMode = i915[33]
  i914.environmentLightingMode = i915[34]
  i914.ambientProbe = new pc.SphericalHarmonicsL2(i915[35])
  i914.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i915[36])
  i914.useReferenceAmbientProbe = !!i915[37]
  request.r(i915[38], i915[39], 0, i914, 'customReflection')
  request.r(i915[40], i915[41], 0, i914, 'defaultReflection')
  i914.defaultReflectionMode = i915[42]
  i914.defaultReflectionResolution = i915[43]
  i914.sunLightObjectId = i915[44]
  i914.pixelLightCount = i915[45]
  i914.defaultReflectionHDR = !!i915[46]
  i914.hasLightDataAsset = !!i915[47]
  i914.hasManualGenerate = !!i915[48]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'lightmapColor')
  request.r(i921[2], i921[3], 0, i920, 'lightmapDirection')
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i922 = root || new UnityEngine.LightProbes()
  var i923 = data
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i931 = data
  var i933 = i931[0]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i933.length; i += 1) {
    i932.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i933[i + 0]));
  }
  i930.ShaderCompilationErrors = i932
  i930.name = i931[1]
  i930.guid = i931[2]
  var i935 = i931[3]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( i935[i + 0] );
  }
  i930.shaderDefinedKeywords = i934
  var i937 = i931[4]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i937[i + 0]) );
  }
  i930.passes = i936
  var i939 = i931[5]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i939[i + 0]) );
  }
  i930.usePasses = i938
  var i941 = i931[6]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i941[i + 0]) );
  }
  i930.defaultParameterValues = i940
  request.r(i931[7], i931[8], 0, i930, 'unityFallbackShader')
  i930.readDepth = !!i931[9]
  i930.isCreatedByShaderGraph = !!i931[10]
  i930.usedBatchUniforms = i931[11]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i945 = data
  i944.shaderName = i945[0]
  i944.errorMessage = i945[1]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i948 = root || new pc.UnityShaderPass()
  var i949 = data
  i948.id = i949[0]
  i948.subShaderIndex = i949[1]
  i948.name = i949[2]
  i948.passType = i949[3]
  i948.grabPassTextureName = i949[4]
  i948.usePass = !!i949[5]
  i948.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[6], i948.zTest)
  i948.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[7], i948.zWrite)
  i948.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[8], i948.culling)
  i948.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i949[9], i948.blending)
  i948.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i949[10], i948.alphaBlending)
  i948.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[11], i948.colorWriteMask)
  i948.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[12], i948.offsetUnits)
  i948.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[13], i948.offsetFactor)
  i948.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[14], i948.stencilRef)
  i948.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[15], i948.stencilReadMask)
  i948.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i949[16], i948.stencilWriteMask)
  i948.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i949[17], i948.stencilOp)
  i948.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i949[18], i948.stencilOpFront)
  i948.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i949[19], i948.stencilOpBack)
  var i951 = i949[20]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i951[i + 0]) );
  }
  i948.tags = i950
  var i953 = i949[21]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( i953[i + 0] );
  }
  i948.passDefinedKeywords = i952
  var i955 = i949[22]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i955[i + 0]) );
  }
  i948.passDefinedKeywordGroups = i954
  var i957 = i949[23]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i957[i + 0]) );
  }
  i948.variants = i956
  var i959 = i949[24]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i959[i + 0]) );
  }
  i948.excludedVariants = i958
  i948.hasDepthReader = !!i949[25]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i961 = data
  i960.val = i961[0]
  i960.name = i961[1]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i963 = data
  i962.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i963[0], i962.src)
  i962.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i963[1], i962.dst)
  i962.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i963[2], i962.op)
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i965 = data
  i964.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i965[0], i964.pass)
  i964.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i965[1], i964.fail)
  i964.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i965[2], i964.zFail)
  i964.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i965[3], i964.comp)
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i969 = data
  i968.name = i969[0]
  i968.value = i969[1]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i973 = data
  var i975 = i973[0]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( i975[i + 0] );
  }
  i972.keywords = i974
  i972.hasDiscard = !!i973[1]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i979 = data
  i978.passId = i979[0]
  i978.subShaderIndex = i979[1]
  var i981 = i979[2]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( i981[i + 0] );
  }
  i978.keywords = i980
  i978.vertexProgram = i979[3]
  i978.fragmentProgram = i979[4]
  i978.compiledForWebGL2 = !!i979[5]
  i978.readDepth = !!i979[6]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'shader')
  i984.pass = i985[2]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i989 = data
  i988.name = i989[0]
  i988.type = i989[1]
  i988.value = new pc.Vec4( i989[2], i989[3], i989[4], i989[5] )
  i988.textureValue = i989[6]
  i988.shaderPropertyFlag = i989[7]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i991 = data
  i990.name = i991[0]
  request.r(i991[1], i991[2], 0, i990, 'texture')
  i990.aabb = i991[3]
  i990.vertices = i991[4]
  i990.triangles = i991[5]
  i990.textureRect = UnityEngine.Rect.MinMaxRect(i991[6], i991[7], i991[8], i991[9])
  i990.packedRect = UnityEngine.Rect.MinMaxRect(i991[10], i991[11], i991[12], i991[13])
  i990.border = new pc.Vec4( i991[14], i991[15], i991[16], i991[17] )
  i990.transparency = i991[18]
  i990.bounds = i991[19]
  i990.pixelsPerUnit = i991[20]
  i990.textureWidth = i991[21]
  i990.textureHeight = i991[22]
  i990.nativeSize = new pc.Vec2( i991[23], i991[24] )
  i990.pivot = new pc.Vec2( i991[25], i991[26] )
  i990.textureRectOffset = new pc.Vec2( i991[27], i991[28] )
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i993 = data
  i992.name = i993[0]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i995 = data
  i994.name = i995[0]
  i994.wrapMode = i995[1]
  i994.isLooping = !!i995[2]
  i994.length = i995[3]
  var i997 = i995[4]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i997[i + 0]) );
  }
  i994.curves = i996
  var i999 = i995[5]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i999[i + 0]) );
  }
  i994.events = i998
  i994.halfPrecision = !!i995[6]
  i994._frameRate = i995[7]
  i994.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i995[8], i994.localBounds)
  i994.hasMuscleCurves = !!i995[9]
  var i1001 = i995[10]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( i1001[i + 0] );
  }
  i994.clipMuscleConstant = i1000
  i994.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i995[11], i994.clipBindingConstant)
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1005 = data
  i1004.path = i1005[0]
  i1004.hash = i1005[1]
  i1004.componentType = i1005[2]
  i1004.property = i1005[3]
  i1004.keys = i1005[4]
  var i1007 = i1005[5]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1007[i + 0]) );
  }
  i1004.objectReferenceKeys = i1006
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1011 = data
  i1010.time = i1011[0]
  request.r(i1011[1], i1011[2], 0, i1010, 'value')
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1015 = data
  i1014.functionName = i1015[0]
  i1014.floatParameter = i1015[1]
  i1014.intParameter = i1015[2]
  i1014.stringParameter = i1015[3]
  request.r(i1015[4], i1015[5], 0, i1014, 'objectReferenceParameter')
  i1014.time = i1015[6]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1017 = data
  i1016.center = new pc.Vec3( i1017[0], i1017[1], i1017[2] )
  i1016.extends = new pc.Vec3( i1017[3], i1017[4], i1017[5] )
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1021 = data
  var i1023 = i1021[0]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( i1023[i + 0] );
  }
  i1020.genericBindings = i1022
  var i1025 = i1021[1]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( i1025[i + 0] );
  }
  i1020.pptrCurveMapping = i1024
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.ascent = i1027[1]
  i1026.originalLineHeight = i1027[2]
  i1026.fontSize = i1027[3]
  var i1029 = i1027[4]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1029[i + 0]) );
  }
  i1026.characterInfo = i1028
  request.r(i1027[5], i1027[6], 0, i1026, 'texture')
  i1026.originalFontSize = i1027[7]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1033 = data
  i1032.index = i1033[0]
  i1032.advance = i1033[1]
  i1032.bearing = i1033[2]
  i1032.glyphWidth = i1033[3]
  i1032.glyphHeight = i1033[4]
  i1032.minX = i1033[5]
  i1032.maxX = i1033[6]
  i1032.minY = i1033[7]
  i1032.maxY = i1033[8]
  i1032.uvBottomLeftX = i1033[9]
  i1032.uvBottomLeftY = i1033[10]
  i1032.uvBottomRightX = i1033[11]
  i1032.uvBottomRightY = i1033[12]
  i1032.uvTopLeftX = i1033[13]
  i1032.uvTopLeftY = i1033[14]
  i1032.uvTopRightX = i1033[15]
  i1032.uvTopRightY = i1033[16]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1035 = data
  i1034.name = i1035[0]
  var i1037 = i1035[1]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1037[i + 0]) );
  }
  i1034.layers = i1036
  var i1039 = i1035[2]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1039[i + 0]) );
  }
  i1034.parameters = i1038
  i1034.animationClips = i1035[3]
  i1034.avatarUnsupported = i1035[4]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1043 = data
  i1042.name = i1043[0]
  i1042.defaultWeight = i1043[1]
  i1042.blendingMode = i1043[2]
  i1042.avatarMask = i1043[3]
  i1042.syncedLayerIndex = i1043[4]
  i1042.syncedLayerAffectsTiming = !!i1043[5]
  i1042.syncedLayers = i1043[6]
  i1042.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1043[7], i1042.stateMachine)
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1045 = data
  i1044.id = i1045[0]
  i1044.name = i1045[1]
  i1044.path = i1045[2]
  var i1047 = i1045[3]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1047[i + 0]) );
  }
  i1044.states = i1046
  var i1049 = i1045[4]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1049[i + 0]) );
  }
  i1044.machines = i1048
  var i1051 = i1045[5]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1051[i + 0]) );
  }
  i1044.entryStateTransitions = i1050
  var i1053 = i1045[6]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1053[i + 0]) );
  }
  i1044.exitStateTransitions = i1052
  var i1055 = i1045[7]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1055[i + 0]) );
  }
  i1044.anyStateTransitions = i1054
  i1044.defaultStateId = i1045[8]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1059 = data
  i1058.id = i1059[0]
  i1058.name = i1059[1]
  i1058.cycleOffset = i1059[2]
  i1058.cycleOffsetParameter = i1059[3]
  i1058.cycleOffsetParameterActive = !!i1059[4]
  i1058.mirror = !!i1059[5]
  i1058.mirrorParameter = i1059[6]
  i1058.mirrorParameterActive = !!i1059[7]
  i1058.motionId = i1059[8]
  i1058.nameHash = i1059[9]
  i1058.fullPathHash = i1059[10]
  i1058.speed = i1059[11]
  i1058.speedParameter = i1059[12]
  i1058.speedParameterActive = !!i1059[13]
  i1058.tag = i1059[14]
  i1058.tagHash = i1059[15]
  i1058.writeDefaultValues = !!i1059[16]
  var i1061 = i1059[17]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 2, i1060, '')
  }
  i1058.behaviours = i1060
  var i1063 = i1059[18]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1063[i + 0]) );
  }
  i1058.transitions = i1062
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1069 = data
  i1068.fullPath = i1069[0]
  i1068.canTransitionToSelf = !!i1069[1]
  i1068.duration = i1069[2]
  i1068.exitTime = i1069[3]
  i1068.hasExitTime = !!i1069[4]
  i1068.hasFixedDuration = !!i1069[5]
  i1068.interruptionSource = i1069[6]
  i1068.offset = i1069[7]
  i1068.orderedInterruption = !!i1069[8]
  i1068.destinationStateId = i1069[9]
  i1068.isExit = !!i1069[10]
  i1068.mute = !!i1069[11]
  i1068.solo = !!i1069[12]
  var i1071 = i1069[13]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1071[i + 0]) );
  }
  i1068.conditions = i1070
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1077 = data
  i1076.destinationStateId = i1077[0]
  i1076.isExit = !!i1077[1]
  i1076.mute = !!i1077[2]
  i1076.solo = !!i1077[3]
  var i1079 = i1077[4]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1079[i + 0]) );
  }
  i1076.conditions = i1078
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1083 = data
  i1082.defaultBool = !!i1083[0]
  i1082.defaultFloat = i1083[1]
  i1082.defaultInt = i1083[2]
  i1082.name = i1083[3]
  i1082.nameHash = i1083[4]
  i1082.type = i1083[5]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1085 = data
  i1084.name = i1085[0]
  i1084.bytes64 = i1085[1]
  i1084.data = i1085[2]
  return i1084
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1087 = data
  i1086.hashCode = i1087[0]
  request.r(i1087[1], i1087[2], 0, i1086, 'material')
  i1086.materialHashCode = i1087[3]
  request.r(i1087[4], i1087[5], 0, i1086, 'atlas')
  i1086.normalStyle = i1087[6]
  i1086.normalSpacingOffset = i1087[7]
  i1086.boldStyle = i1087[8]
  i1086.boldSpacing = i1087[9]
  i1086.italicStyle = i1087[10]
  i1086.tabSize = i1087[11]
  i1086.m_Version = i1087[12]
  i1086.m_SourceFontFileGUID = i1087[13]
  request.r(i1087[14], i1087[15], 0, i1086, 'm_SourceFontFile_EditorRef')
  request.r(i1087[16], i1087[17], 0, i1086, 'm_SourceFontFile')
  i1086.m_AtlasPopulationMode = i1087[18]
  i1086.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1087[19], i1086.m_FaceInfo)
  var i1089 = i1087[20]
  var i1088 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.add(request.d('UnityEngine.TextCore.Glyph', i1089[i + 0]));
  }
  i1086.m_GlyphTable = i1088
  var i1091 = i1087[21]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.add(request.d('TMPro.TMP_Character', i1091[i + 0]));
  }
  i1086.m_CharacterTable = i1090
  var i1093 = i1087[22]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 2) {
  request.r(i1093[i + 0], i1093[i + 1], 2, i1092, '')
  }
  i1086.m_AtlasTextures = i1092
  i1086.m_AtlasTextureIndex = i1087[23]
  i1086.m_IsMultiAtlasTexturesEnabled = !!i1087[24]
  i1086.m_ClearDynamicDataOnBuild = !!i1087[25]
  var i1095 = i1087[26]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.add(request.d('UnityEngine.TextCore.GlyphRect', i1095[i + 0]));
  }
  i1086.m_UsedGlyphRects = i1094
  var i1097 = i1087[27]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(request.d('UnityEngine.TextCore.GlyphRect', i1097[i + 0]));
  }
  i1086.m_FreeGlyphRects = i1096
  i1086.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1087[28], i1086.m_fontInfo)
  i1086.m_AtlasWidth = i1087[29]
  i1086.m_AtlasHeight = i1087[30]
  i1086.m_AtlasPadding = i1087[31]
  i1086.m_AtlasRenderMode = i1087[32]
  var i1099 = i1087[33]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.add(request.d('TMPro.TMP_Glyph', i1099[i + 0]));
  }
  i1086.m_glyphInfoList = i1098
  i1086.m_KerningTable = request.d('TMPro.KerningTable', i1087[34], i1086.m_KerningTable)
  i1086.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1087[35], i1086.m_FontFeatureTable)
  var i1101 = i1087[36]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 1, i1100, '')
  }
  i1086.fallbackFontAssets = i1100
  var i1103 = i1087[37]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1103.length; i += 2) {
  request.r(i1103[i + 0], i1103[i + 1], 1, i1102, '')
  }
  i1086.m_FallbackFontAssetTable = i1102
  i1086.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1087[38], i1086.m_CreationSettings)
  var i1105 = i1087[39]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('TMPro.TMP_FontWeightPair', i1105[i + 0]) );
  }
  i1086.m_FontWeightTable = i1104
  var i1107 = i1087[40]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('TMPro.TMP_FontWeightPair', i1107[i + 0]) );
  }
  i1086.fontWeights = i1106
  return i1086
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1109 = data
  i1108.m_FaceIndex = i1109[0]
  i1108.m_FamilyName = i1109[1]
  i1108.m_StyleName = i1109[2]
  i1108.m_PointSize = i1109[3]
  i1108.m_Scale = i1109[4]
  i1108.m_UnitsPerEM = i1109[5]
  i1108.m_LineHeight = i1109[6]
  i1108.m_AscentLine = i1109[7]
  i1108.m_CapLine = i1109[8]
  i1108.m_MeanLine = i1109[9]
  i1108.m_Baseline = i1109[10]
  i1108.m_DescentLine = i1109[11]
  i1108.m_SuperscriptOffset = i1109[12]
  i1108.m_SuperscriptSize = i1109[13]
  i1108.m_SubscriptOffset = i1109[14]
  i1108.m_SubscriptSize = i1109[15]
  i1108.m_UnderlineOffset = i1109[16]
  i1108.m_UnderlineThickness = i1109[17]
  i1108.m_StrikethroughOffset = i1109[18]
  i1108.m_StrikethroughThickness = i1109[19]
  i1108.m_TabWidth = i1109[20]
  return i1108
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1113 = data
  i1112.m_Index = i1113[0]
  i1112.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1113[1], i1112.m_Metrics)
  i1112.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1113[2], i1112.m_GlyphRect)
  i1112.m_Scale = i1113[3]
  i1112.m_AtlasIndex = i1113[4]
  i1112.m_ClassDefinitionType = i1113[5]
  return i1112
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1115 = data
  i1114.m_Width = i1115[0]
  i1114.m_Height = i1115[1]
  i1114.m_HorizontalBearingX = i1115[2]
  i1114.m_HorizontalBearingY = i1115[3]
  i1114.m_HorizontalAdvance = i1115[4]
  return i1114
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1117 = data
  i1116.m_X = i1117[0]
  i1116.m_Y = i1117[1]
  i1116.m_Width = i1117[2]
  i1116.m_Height = i1117[3]
  return i1116
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1120 = root || request.c( 'TMPro.TMP_Character' )
  var i1121 = data
  i1120.m_ElementType = i1121[0]
  i1120.m_Unicode = i1121[1]
  i1120.m_GlyphIndex = i1121[2]
  i1120.m_Scale = i1121[3]
  return i1120
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1127 = data
  i1126.Name = i1127[0]
  i1126.PointSize = i1127[1]
  i1126.Scale = i1127[2]
  i1126.CharacterCount = i1127[3]
  i1126.LineHeight = i1127[4]
  i1126.Baseline = i1127[5]
  i1126.Ascender = i1127[6]
  i1126.CapHeight = i1127[7]
  i1126.Descender = i1127[8]
  i1126.CenterLine = i1127[9]
  i1126.SuperscriptOffset = i1127[10]
  i1126.SubscriptOffset = i1127[11]
  i1126.SubSize = i1127[12]
  i1126.Underline = i1127[13]
  i1126.UnderlineThickness = i1127[14]
  i1126.strikethrough = i1127[15]
  i1126.strikethroughThickness = i1127[16]
  i1126.TabWidth = i1127[17]
  i1126.Padding = i1127[18]
  i1126.AtlasWidth = i1127[19]
  i1126.AtlasHeight = i1127[20]
  return i1126
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1130 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1131 = data
  i1130.id = i1131[0]
  i1130.x = i1131[1]
  i1130.y = i1131[2]
  i1130.width = i1131[3]
  i1130.height = i1131[4]
  i1130.xOffset = i1131[5]
  i1130.yOffset = i1131[6]
  i1130.xAdvance = i1131[7]
  i1130.scale = i1131[8]
  return i1130
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1132 = root || request.c( 'TMPro.KerningTable' )
  var i1133 = data
  var i1135 = i1133[0]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.add(request.d('TMPro.KerningPair', i1135[i + 0]));
  }
  i1132.kerningPairs = i1134
  return i1132
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.KerningPair' )
  var i1139 = data
  i1138.xOffset = i1139[0]
  i1138.m_FirstGlyph = i1139[1]
  i1138.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1139[2], i1138.m_FirstGlyphAdjustments)
  i1138.m_SecondGlyph = i1139[3]
  i1138.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1139[4], i1138.m_SecondGlyphAdjustments)
  i1138.m_IgnoreSpacingAdjustments = !!i1139[5]
  return i1138
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1141 = data
  var i1143 = i1141[0]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1143[i + 0]));
  }
  i1140.m_GlyphPairAdjustmentRecords = i1142
  return i1140
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1147 = data
  i1146.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1147[0], i1146.m_FirstAdjustmentRecord)
  i1146.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1147[1], i1146.m_SecondAdjustmentRecord)
  i1146.m_FeatureLookupFlags = i1147[2]
  return i1146
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1149 = data
  i1148.m_GlyphIndex = i1149[0]
  i1148.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1149[1], i1148.m_GlyphValueRecord)
  return i1148
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1150 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1151 = data
  i1150.m_XPlacement = i1151[0]
  i1150.m_YPlacement = i1151[1]
  i1150.m_XAdvance = i1151[2]
  i1150.m_YAdvance = i1151[3]
  return i1150
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1155 = data
  i1154.sourceFontFileName = i1155[0]
  i1154.sourceFontFileGUID = i1155[1]
  i1154.pointSizeSamplingMode = i1155[2]
  i1154.pointSize = i1155[3]
  i1154.padding = i1155[4]
  i1154.packingMode = i1155[5]
  i1154.atlasWidth = i1155[6]
  i1154.atlasHeight = i1155[7]
  i1154.characterSetSelectionMode = i1155[8]
  i1154.characterSequence = i1155[9]
  i1154.referencedFontAssetGUID = i1155[10]
  i1154.referencedTextAssetGUID = i1155[11]
  i1154.fontStyle = i1155[12]
  i1154.fontStyleModifier = i1155[13]
  i1154.renderMode = i1155[14]
  i1154.includeFontFeatures = !!i1155[15]
  return i1154
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'regularTypeface')
  request.r(i1159[2], i1159[3], 0, i1158, 'italicTypeface')
  return i1158
}

Deserializers["ProductData"] = function (request, data, root) {
  var i1160 = root || request.c( 'ProductData' )
  var i1161 = data
  var i1163 = i1161[0]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('Product')))
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.add(request.d('Product', i1163[i + 0]));
  }
  i1160.lstProduct = i1162
  var i1165 = i1161[1]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('ProductPetShop')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('ProductPetShop', i1165[i + 0]));
  }
  i1160.lstProductPetShop = i1164
  return i1160
}

Deserializers["Product"] = function (request, data, root) {
  var i1168 = root || request.c( 'Product' )
  var i1169 = data
  i1168.typeProduct = i1169[0]
  request.r(i1169[1], i1169[2], 0, i1168, 'icon')
  i1168.productName = i1169[3]
  i1168.companyName = i1169[4]
  i1168.unitPrice = i1169[5]
  request.r(i1169[6], i1169[7], 0, i1168, 'prefab')
  request.r(i1169[8], i1169[9], 0, i1168, 'mateOutLine')
  request.r(i1169[10], i1169[11], 0, i1168, 'mateNoOutLine')
  return i1168
}

Deserializers["ProductPetShop"] = function (request, data, root) {
  var i1172 = root || request.c( 'ProductPetShop' )
  var i1173 = data
  i1172.typeProduct = i1173[0]
  request.r(i1173[1], i1173[2], 0, i1172, 'icon')
  i1172.productName = i1173[3]
  i1172.companyName = i1173[4]
  i1172.unitPrice = i1173[5]
  request.r(i1173[6], i1173[7], 0, i1172, 'prefab')
  request.r(i1173[8], i1173[9], 0, i1172, 'mateOutLine')
  request.r(i1173[10], i1173[11], 0, i1172, 'mateNoOutLine')
  return i1172
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1174 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1175 = data
  var i1177 = i1175[0]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 2) {
  request.r(i1177[i + 0], i1177[i + 1], 2, i1176, '')
  }
  i1174.atlasAssets = i1176
  i1174.scale = i1175[1]
  request.r(i1175[2], i1175[3], 0, i1174, 'skeletonJSON')
  i1174.isUpgradingBlendModeMaterials = !!i1175[4]
  i1174.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1175[5], i1174.blendModeMaterials)
  var i1179 = i1175[6]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1179.length; i += 2) {
  request.r(i1179[i + 0], i1179[i + 1], 1, i1178, '')
  }
  i1174.skeletonDataModifiers = i1178
  var i1181 = i1175[7]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( i1181[i + 0] );
  }
  i1174.fromAnimation = i1180
  var i1183 = i1175[8]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( i1183[i + 0] );
  }
  i1174.toAnimation = i1182
  i1174.duration = i1175[9]
  i1174.defaultMix = i1175[10]
  request.r(i1175[11], i1175[12], 0, i1174, 'controller')
  return i1174
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1186 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1187 = data
  i1186.applyAdditiveMaterial = !!i1187[0]
  var i1189 = i1187[1]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1189[i + 0]));
  }
  i1186.additiveMaterials = i1188
  var i1191 = i1187[2]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1191[i + 0]));
  }
  i1186.multiplyMaterials = i1190
  var i1193 = i1187[3]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1193[i + 0]));
  }
  i1186.screenMaterials = i1192
  i1186.requiresBlendModeMaterials = !!i1187[4]
  return i1186
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1196 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1197 = data
  i1196.pageName = i1197[0]
  request.r(i1197[1], i1197[2], 0, i1196, 'material')
  return i1196
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1200 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1201 = data
  request.r(i1201[0], i1201[1], 0, i1200, 'atlasFile')
  var i1203 = i1201[2]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 2, i1202, '')
  }
  i1200.materials = i1202
  return i1200
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1204 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1205 = data
  i1204.useSafeMode = !!i1205[0]
  i1204.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1205[1], i1204.safeModeOptions)
  i1204.timeScale = i1205[2]
  i1204.unscaledTimeScale = i1205[3]
  i1204.useSmoothDeltaTime = !!i1205[4]
  i1204.maxSmoothUnscaledTime = i1205[5]
  i1204.rewindCallbackMode = i1205[6]
  i1204.showUnityEditorReport = !!i1205[7]
  i1204.logBehaviour = i1205[8]
  i1204.drawGizmos = !!i1205[9]
  i1204.defaultRecyclable = !!i1205[10]
  i1204.defaultAutoPlay = i1205[11]
  i1204.defaultUpdateType = i1205[12]
  i1204.defaultTimeScaleIndependent = !!i1205[13]
  i1204.defaultEaseType = i1205[14]
  i1204.defaultEaseOvershootOrAmplitude = i1205[15]
  i1204.defaultEasePeriod = i1205[16]
  i1204.defaultAutoKill = !!i1205[17]
  i1204.defaultLoopType = i1205[18]
  i1204.debugMode = !!i1205[19]
  i1204.debugStoreTargetId = !!i1205[20]
  i1204.showPreviewPanel = !!i1205[21]
  i1204.storeSettingsLocation = i1205[22]
  i1204.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1205[23], i1204.modules)
  i1204.createASMDEF = !!i1205[24]
  i1204.showPlayingTweens = !!i1205[25]
  i1204.showPausedTweens = !!i1205[26]
  return i1204
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1206 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1207 = data
  i1206.logBehaviour = i1207[0]
  i1206.nestedTweenFailureBehaviour = i1207[1]
  return i1206
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1208 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1209 = data
  i1208.showPanel = !!i1209[0]
  i1208.audioEnabled = !!i1209[1]
  i1208.physicsEnabled = !!i1209[2]
  i1208.physics2DEnabled = !!i1209[3]
  i1208.spriteEnabled = !!i1209[4]
  i1208.uiEnabled = !!i1209[5]
  i1208.textMeshProEnabled = !!i1209[6]
  i1208.tk2DEnabled = !!i1209[7]
  i1208.deAudioEnabled = !!i1209[8]
  i1208.deUnityExtendedEnabled = !!i1209[9]
  i1208.epoOutlineEnabled = !!i1209[10]
  return i1208
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_Settings' )
  var i1211 = data
  i1210.m_enableWordWrapping = !!i1211[0]
  i1210.m_enableKerning = !!i1211[1]
  i1210.m_enableExtraPadding = !!i1211[2]
  i1210.m_enableTintAllSprites = !!i1211[3]
  i1210.m_enableParseEscapeCharacters = !!i1211[4]
  i1210.m_EnableRaycastTarget = !!i1211[5]
  i1210.m_GetFontFeaturesAtRuntime = !!i1211[6]
  i1210.m_missingGlyphCharacter = i1211[7]
  i1210.m_warningsDisabled = !!i1211[8]
  request.r(i1211[9], i1211[10], 0, i1210, 'm_defaultFontAsset')
  i1210.m_defaultFontAssetPath = i1211[11]
  i1210.m_defaultFontSize = i1211[12]
  i1210.m_defaultAutoSizeMinRatio = i1211[13]
  i1210.m_defaultAutoSizeMaxRatio = i1211[14]
  i1210.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1211[15], i1211[16] )
  i1210.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1211[17], i1211[18] )
  i1210.m_autoSizeTextContainer = !!i1211[19]
  i1210.m_IsTextObjectScaleStatic = !!i1211[20]
  var i1213 = i1211[21]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1213.length; i += 2) {
  request.r(i1213[i + 0], i1213[i + 1], 1, i1212, '')
  }
  i1210.m_fallbackFontAssets = i1212
  i1210.m_matchMaterialPreset = !!i1211[22]
  request.r(i1211[23], i1211[24], 0, i1210, 'm_defaultSpriteAsset')
  i1210.m_defaultSpriteAssetPath = i1211[25]
  i1210.m_enableEmojiSupport = !!i1211[26]
  i1210.m_MissingCharacterSpriteUnicode = i1211[27]
  i1210.m_defaultColorGradientPresetsPath = i1211[28]
  request.r(i1211[29], i1211[30], 0, i1210, 'm_defaultStyleSheet')
  i1210.m_StyleSheetsResourcePath = i1211[31]
  request.r(i1211[32], i1211[33], 0, i1210, 'm_leadingCharacters')
  request.r(i1211[34], i1211[35], 0, i1210, 'm_followingCharacters')
  i1210.m_UseModernHangulLineBreakingRules = !!i1211[36]
  return i1210
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1215 = data
  i1214.hashCode = i1215[0]
  request.r(i1215[1], i1215[2], 0, i1214, 'material')
  i1214.materialHashCode = i1215[3]
  request.r(i1215[4], i1215[5], 0, i1214, 'spriteSheet')
  var i1217 = i1215[6]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('TMPro.TMP_Sprite', i1217[i + 0]));
  }
  i1214.spriteInfoList = i1216
  var i1219 = i1215[7]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1219.length; i += 2) {
  request.r(i1219[i + 0], i1219[i + 1], 1, i1218, '')
  }
  i1214.fallbackSpriteAssets = i1218
  i1214.m_Version = i1215[8]
  i1214.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1215[9], i1214.m_FaceInfo)
  var i1221 = i1215[10]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('TMPro.TMP_SpriteCharacter', i1221[i + 0]));
  }
  i1214.m_SpriteCharacterTable = i1220
  var i1223 = i1215[11]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('TMPro.TMP_SpriteGlyph', i1223[i + 0]));
  }
  i1214.m_SpriteGlyphTable = i1222
  return i1214
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1227 = data
  i1226.name = i1227[0]
  i1226.hashCode = i1227[1]
  i1226.unicode = i1227[2]
  i1226.pivot = new pc.Vec2( i1227[3], i1227[4] )
  request.r(i1227[5], i1227[6], 0, i1226, 'sprite')
  i1226.id = i1227[7]
  i1226.x = i1227[8]
  i1226.y = i1227[9]
  i1226.width = i1227[10]
  i1226.height = i1227[11]
  i1226.xOffset = i1227[12]
  i1226.yOffset = i1227[13]
  i1226.xAdvance = i1227[14]
  i1226.scale = i1227[15]
  return i1226
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1233 = data
  i1232.m_Name = i1233[0]
  i1232.m_HashCode = i1233[1]
  i1232.m_ElementType = i1233[2]
  i1232.m_Unicode = i1233[3]
  i1232.m_GlyphIndex = i1233[4]
  i1232.m_Scale = i1233[5]
  return i1232
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1237 = data
  request.r(i1237[0], i1237[1], 0, i1236, 'sprite')
  i1236.m_Index = i1237[2]
  i1236.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1237[3], i1236.m_Metrics)
  i1236.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1237[4], i1236.m_GlyphRect)
  i1236.m_Scale = i1237[5]
  i1236.m_AtlasIndex = i1237[6]
  i1236.m_ClassDefinitionType = i1237[7]
  return i1236
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('TMPro.TMP_Style', i1241[i + 0]));
  }
  i1238.m_StyleList = i1240
  return i1238
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.TMP_Style' )
  var i1245 = data
  i1244.m_Name = i1245[0]
  i1244.m_HashCode = i1245[1]
  i1244.m_OpeningDefinition = i1245[2]
  i1244.m_ClosingDefinition = i1245[3]
  i1244.m_OpeningTagArray = i1245[4]
  i1244.m_ClosingTagArray = i1245[5]
  i1244.m_OpeningTagUnicodeArray = i1245[6]
  i1244.m_ClosingTagUnicodeArray = i1245[7]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1247 = data
  var i1249 = i1247[0]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1249[i + 0]) );
  }
  i1246.files = i1248
  i1246.componentToPrefabIds = i1247[1]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1253 = data
  i1252.path = i1253[0]
  request.r(i1253[1], i1253[2], 0, i1252, 'unityObject')
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1255 = data
  var i1257 = i1255[0]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1257[i + 0]) );
  }
  i1254.scriptsExecutionOrder = i1256
  var i1259 = i1255[1]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1259[i + 0]) );
  }
  i1254.sortingLayers = i1258
  var i1261 = i1255[2]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1261[i + 0]) );
  }
  i1254.cullingLayers = i1260
  i1254.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1255[3], i1254.timeSettings)
  i1254.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1255[4], i1254.physicsSettings)
  i1254.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1255[5], i1254.physics2DSettings)
  i1254.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1255[6], i1254.qualitySettings)
  i1254.enableRealtimeShadows = !!i1255[7]
  i1254.enableAutoInstancing = !!i1255[8]
  i1254.enableDynamicBatching = !!i1255[9]
  i1254.lightmapEncodingQuality = i1255[10]
  i1254.desiredColorSpace = i1255[11]
  var i1263 = i1255[12]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( i1263[i + 0] );
  }
  i1254.allTags = i1262
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1267 = data
  i1266.name = i1267[0]
  i1266.value = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1271 = data
  i1270.id = i1271[0]
  i1270.name = i1271[1]
  i1270.value = i1271[2]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1275 = data
  i1274.id = i1275[0]
  i1274.name = i1275[1]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1277 = data
  i1276.fixedDeltaTime = i1277[0]
  i1276.maximumDeltaTime = i1277[1]
  i1276.timeScale = i1277[2]
  i1276.maximumParticleTimestep = i1277[3]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1279 = data
  i1278.gravity = new pc.Vec3( i1279[0], i1279[1], i1279[2] )
  i1278.defaultSolverIterations = i1279[3]
  i1278.bounceThreshold = i1279[4]
  i1278.autoSyncTransforms = !!i1279[5]
  i1278.autoSimulation = !!i1279[6]
  var i1281 = i1279[7]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1281[i + 0]) );
  }
  i1278.collisionMatrix = i1280
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1285 = data
  i1284.enabled = !!i1285[0]
  i1284.layerId = i1285[1]
  i1284.otherLayerId = i1285[2]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1287 = data
  request.r(i1287[0], i1287[1], 0, i1286, 'material')
  i1286.gravity = new pc.Vec2( i1287[2], i1287[3] )
  i1286.positionIterations = i1287[4]
  i1286.velocityIterations = i1287[5]
  i1286.velocityThreshold = i1287[6]
  i1286.maxLinearCorrection = i1287[7]
  i1286.maxAngularCorrection = i1287[8]
  i1286.maxTranslationSpeed = i1287[9]
  i1286.maxRotationSpeed = i1287[10]
  i1286.baumgarteScale = i1287[11]
  i1286.baumgarteTOIScale = i1287[12]
  i1286.timeToSleep = i1287[13]
  i1286.linearSleepTolerance = i1287[14]
  i1286.angularSleepTolerance = i1287[15]
  i1286.defaultContactOffset = i1287[16]
  i1286.autoSimulation = !!i1287[17]
  i1286.queriesHitTriggers = !!i1287[18]
  i1286.queriesStartInColliders = !!i1287[19]
  i1286.callbacksOnDisable = !!i1287[20]
  i1286.reuseCollisionCallbacks = !!i1287[21]
  i1286.autoSyncTransforms = !!i1287[22]
  var i1289 = i1287[23]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1289[i + 0]) );
  }
  i1286.collisionMatrix = i1288
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1293 = data
  i1292.enabled = !!i1293[0]
  i1292.layerId = i1293[1]
  i1292.otherLayerId = i1293[2]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1295 = data
  var i1297 = i1295[0]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1297[i + 0]) );
  }
  i1294.qualityLevels = i1296
  var i1299 = i1295[1]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( i1299[i + 0] );
  }
  i1294.names = i1298
  i1294.shadows = i1295[2]
  i1294.anisotropicFiltering = i1295[3]
  i1294.antiAliasing = i1295[4]
  i1294.lodBias = i1295[5]
  i1294.shadowCascades = i1295[6]
  i1294.shadowDistance = i1295[7]
  i1294.shadowmaskMode = i1295[8]
  i1294.shadowProjection = i1295[9]
  i1294.shadowResolution = i1295[10]
  i1294.softParticles = !!i1295[11]
  i1294.softVegetation = !!i1295[12]
  i1294.activeColorSpace = i1295[13]
  i1294.desiredColorSpace = i1295[14]
  i1294.masterTextureLimit = i1295[15]
  i1294.maxQueuedFrames = i1295[16]
  i1294.particleRaycastBudget = i1295[17]
  i1294.pixelLightCount = i1295[18]
  i1294.realtimeReflectionProbes = !!i1295[19]
  i1294.shadowCascade2Split = i1295[20]
  i1294.shadowCascade4Split = new pc.Vec3( i1295[21], i1295[22], i1295[23] )
  i1294.streamingMipmapsActive = !!i1295[24]
  i1294.vSyncCount = i1295[25]
  i1294.asyncUploadBufferSize = i1295[26]
  i1294.asyncUploadTimeSlice = i1295[27]
  i1294.billboardsFaceCameraPosition = !!i1295[28]
  i1294.shadowNearPlaneOffset = i1295[29]
  i1294.streamingMipmapsMemoryBudget = i1295[30]
  i1294.maximumLODLevel = i1295[31]
  i1294.streamingMipmapsAddAllCameras = !!i1295[32]
  i1294.streamingMipmapsMaxLevelReduction = i1295[33]
  i1294.streamingMipmapsRenderersPerFrame = i1295[34]
  i1294.resolutionScalingFixedDPIFactor = i1295[35]
  i1294.streamingMipmapsMaxFileIORequests = i1295[36]
  i1294.currentQualityLevel = i1295[37]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1305 = data
  i1304.weight = i1305[0]
  i1304.vertices = i1305[1]
  i1304.normals = i1305[2]
  i1304.tangents = i1305[3]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1309 = data
  i1308.mode = i1309[0]
  i1308.parameter = i1309[1]
  i1308.threshold = i1309[2]
  return i1308
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1311 = data
  i1310.xPlacement = i1311[0]
  i1310.yPlacement = i1311[1]
  i1310.xAdvance = i1311[2]
  i1310.yAdvance = i1311[3]
  return i1310
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[23],"70":[7],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[7],"94":[5],"95":[96],"97":[96],"26":[25],"98":[7],"99":[100],"101":[25],"102":[3,5],"43":[30,25],"103":[20,3,5],"104":[3,5],"105":[5,3],"106":[72],"107":[80],"108":[109],"110":[111],"112":[25],"113":[5,25],"33":[25,30],"114":[25],"115":[30,25],"116":[5],"117":[30,25],"118":[25],"119":[120],"121":[25],"122":[25],"29":[26],"31":[30,25],"123":[25],"28":[26],"124":[25],"37":[25],"125":[25],"126":[25],"127":[25],"128":[25],"129":[25],"130":[25],"131":[25],"132":[30,25],"133":[25],"134":[25],"135":[25],"136":[25],"35":[30,25],"137":[25],"138":[49],"139":[49],"50":[49],"140":[49],"141":[7],"142":[7],"143":[120],"144":[120]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","Cinemachine.CinemachineBrain","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","Cinemachine.CinemachineFramingTransposer","UnityEngine.Light","UnityEngine.BoxCollider","ShelfGuide","UnityEngine.GameObject","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Animal","UnityEngine.SkinnedMeshRenderer","DoTweenMove","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.GridLayoutGroup","ContainerProducttPetShop","ElementProductPetShop","ProductData","UnityEngine.UI.Button","AnimScaleButton","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","GameManagerPetShop5","UnityEngine.Animation","UnityEngine.AnimationClip","TouchInput","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","RaycastShelf","UnityEngine.Cubemap","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.39f1";

Deserializers.productName = "SuperMarket";

Deserializers.lunaInitializationTime = "11/01/2024 04:41:51";

Deserializers.lunaDaysRunning = "4.2";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "PLY01_HieuNX_Luna";

Deserializers.lunaAppID = "13792";

Deserializers.projectId = "b7f5fb4a515a2f649a5ba0cce954dadb";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.10.1\ncom.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1947";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5520";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.SuperMarket";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "0d43cbf7-5791-4be7-b4cd-dc08a73e1b02";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


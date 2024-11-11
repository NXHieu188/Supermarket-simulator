var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3760 = root || request.c( 'UnityEngine.JointSpring' )
  var i3761 = data
  i3760.spring = i3761[0]
  i3760.damper = i3761[1]
  i3760.targetPosition = i3761[2]
  return i3760
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3762 = root || request.c( 'UnityEngine.JointMotor' )
  var i3763 = data
  i3762.m_TargetVelocity = i3763[0]
  i3762.m_Force = i3763[1]
  i3762.m_FreeSpin = i3763[2]
  return i3762
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3764 = root || request.c( 'UnityEngine.JointLimits' )
  var i3765 = data
  i3764.m_Min = i3765[0]
  i3764.m_Max = i3765[1]
  i3764.m_Bounciness = i3765[2]
  i3764.m_BounceMinVelocity = i3765[3]
  i3764.m_ContactDistance = i3765[4]
  i3764.minBounce = i3765[5]
  i3764.maxBounce = i3765[6]
  return i3764
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3766 = root || request.c( 'UnityEngine.JointDrive' )
  var i3767 = data
  i3766.m_PositionSpring = i3767[0]
  i3766.m_PositionDamper = i3767[1]
  i3766.m_MaximumForce = i3767[2]
  return i3766
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3768 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3769 = data
  i3768.m_Spring = i3769[0]
  i3768.m_Damper = i3769[1]
  return i3768
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3770 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3771 = data
  i3770.m_Limit = i3771[0]
  i3770.m_Bounciness = i3771[1]
  i3770.m_ContactDistance = i3771[2]
  return i3770
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3772 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3773 = data
  i3772.m_ExtremumSlip = i3773[0]
  i3772.m_ExtremumValue = i3773[1]
  i3772.m_AsymptoteSlip = i3773[2]
  i3772.m_AsymptoteValue = i3773[3]
  i3772.m_Stiffness = i3773[4]
  return i3772
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3774 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3775 = data
  i3774.m_LowerAngle = i3775[0]
  i3774.m_UpperAngle = i3775[1]
  return i3774
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3776 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3777 = data
  i3776.m_MotorSpeed = i3777[0]
  i3776.m_MaximumMotorTorque = i3777[1]
  return i3776
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3778 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3779 = data
  i3778.m_DampingRatio = i3779[0]
  i3778.m_Frequency = i3779[1]
  i3778.m_Angle = i3779[2]
  return i3778
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3780 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3781 = data
  i3780.m_LowerTranslation = i3781[0]
  i3780.m_UpperTranslation = i3781[1]
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3783 = data
  i3782.name = i3783[0]
  i3782.halfPrecision = !!i3783[1]
  i3782.useUInt32IndexFormat = !!i3783[2]
  i3782.vertexCount = i3783[3]
  i3782.aabb = i3783[4]
  var i3785 = i3783[5]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.push( !!i3785[i + 0] );
  }
  i3782.streams = i3784
  i3782.vertices = i3783[6]
  var i3787 = i3783[7]
  var i3786 = []
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3787[i + 0]) );
  }
  i3782.subMeshes = i3786
  var i3789 = i3783[8]
  var i3788 = []
  for(var i = 0; i < i3789.length; i += 16) {
    i3788.push( new pc.Mat4().setData(i3789[i + 0], i3789[i + 1], i3789[i + 2], i3789[i + 3],  i3789[i + 4], i3789[i + 5], i3789[i + 6], i3789[i + 7],  i3789[i + 8], i3789[i + 9], i3789[i + 10], i3789[i + 11],  i3789[i + 12], i3789[i + 13], i3789[i + 14], i3789[i + 15]) );
  }
  i3782.bindposes = i3788
  var i3791 = i3783[9]
  var i3790 = []
  for(var i = 0; i < i3791.length; i += 1) {
    i3790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3791[i + 0]) );
  }
  i3782.blendShapes = i3790
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3797 = data
  i3796.triangles = i3797[0]
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3803 = data
  i3802.name = i3803[0]
  var i3805 = i3803[1]
  var i3804 = []
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3805[i + 0]) );
  }
  i3802.frames = i3804
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3806 = root || new pc.UnityMaterial()
  var i3807 = data
  i3806.name = i3807[0]
  request.r(i3807[1], i3807[2], 0, i3806, 'shader')
  i3806.renderQueue = i3807[3]
  i3806.enableInstancing = !!i3807[4]
  var i3809 = i3807[5]
  var i3808 = []
  for(var i = 0; i < i3809.length; i += 1) {
    i3808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3809[i + 0]) );
  }
  i3806.floatParameters = i3808
  var i3811 = i3807[6]
  var i3810 = []
  for(var i = 0; i < i3811.length; i += 1) {
    i3810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3811[i + 0]) );
  }
  i3806.colorParameters = i3810
  var i3813 = i3807[7]
  var i3812 = []
  for(var i = 0; i < i3813.length; i += 1) {
    i3812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3813[i + 0]) );
  }
  i3806.vectorParameters = i3812
  var i3815 = i3807[8]
  var i3814 = []
  for(var i = 0; i < i3815.length; i += 1) {
    i3814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3815[i + 0]) );
  }
  i3806.textureParameters = i3814
  var i3817 = i3807[9]
  var i3816 = []
  for(var i = 0; i < i3817.length; i += 1) {
    i3816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3817[i + 0]) );
  }
  i3806.materialFlags = i3816
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3821 = data
  i3820.name = i3821[0]
  i3820.value = i3821[1]
  return i3820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3825 = data
  i3824.name = i3825[0]
  i3824.value = new pc.Color(i3825[1], i3825[2], i3825[3], i3825[4])
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3829 = data
  i3828.name = i3829[0]
  i3828.value = new pc.Vec4( i3829[1], i3829[2], i3829[3], i3829[4] )
  return i3828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3833 = data
  i3832.name = i3833[0]
  request.r(i3833[1], i3833[2], 0, i3832, 'value')
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3837 = data
  i3836.name = i3837[0]
  i3836.enabled = !!i3837[1]
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3839 = data
  i3838.name = i3839[0]
  i3838.width = i3839[1]
  i3838.height = i3839[2]
  i3838.mipmapCount = i3839[3]
  i3838.anisoLevel = i3839[4]
  i3838.filterMode = i3839[5]
  i3838.hdr = !!i3839[6]
  i3838.format = i3839[7]
  i3838.wrapMode = i3839[8]
  i3838.alphaIsTransparency = !!i3839[9]
  i3838.alphaSource = i3839[10]
  i3838.graphicsFormat = i3839[11]
  i3838.sRGBTexture = !!i3839[12]
  i3838.desiredColorSpace = i3839[13]
  i3838.wrapU = i3839[14]
  i3838.wrapV = i3839[15]
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3841 = data
  i3840.position = new pc.Vec3( i3841[0], i3841[1], i3841[2] )
  i3840.scale = new pc.Vec3( i3841[3], i3841[4], i3841[5] )
  i3840.rotation = new pc.Quat(i3841[6], i3841[7], i3841[8], i3841[9])
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3843 = data
  request.r(i3843[0], i3843[1], 0, i3842, 'sharedMesh')
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3845 = data
  request.r(i3845[0], i3845[1], 0, i3844, 'additionalVertexStreams')
  i3844.enabled = !!i3845[2]
  request.r(i3845[3], i3845[4], 0, i3844, 'sharedMaterial')
  var i3847 = i3845[5]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 2) {
  request.r(i3847[i + 0], i3847[i + 1], 2, i3846, '')
  }
  i3844.sharedMaterials = i3846
  i3844.receiveShadows = !!i3845[6]
  i3844.shadowCastingMode = i3845[7]
  i3844.sortingLayerID = i3845[8]
  i3844.sortingOrder = i3845[9]
  i3844.lightmapIndex = i3845[10]
  i3844.lightmapSceneIndex = i3845[11]
  i3844.lightmapScaleOffset = new pc.Vec4( i3845[12], i3845[13], i3845[14], i3845[15] )
  i3844.lightProbeUsage = i3845[16]
  i3844.reflectionProbeUsage = i3845[17]
  return i3844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3851 = data
  i3850.name = i3851[0]
  i3850.tagId = i3851[1]
  i3850.enabled = !!i3851[2]
  i3850.isStatic = !!i3851[3]
  i3850.layer = i3851[4]
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3853 = data
  i3852.name = i3853[0]
  i3852.atlasId = i3853[1]
  i3852.mipmapCount = i3853[2]
  i3852.hdr = !!i3853[3]
  i3852.size = i3853[4]
  i3852.anisoLevel = i3853[5]
  i3852.filterMode = i3853[6]
  var i3855 = i3853[7]
  var i3854 = []
  for(var i = 0; i < i3855.length; i += 4) {
    i3854.push( UnityEngine.Rect.MinMaxRect(i3855[i + 0], i3855[i + 1], i3855[i + 2], i3855[i + 3]) );
  }
  i3852.rects = i3854
  i3852.wrapU = i3853[8]
  i3852.wrapV = i3853[9]
  return i3852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3859 = data
  i3858.name = i3859[0]
  i3858.index = i3859[1]
  i3858.startup = !!i3859[2]
  return i3858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3861 = data
  i3860.enabled = !!i3861[0]
  i3860.aspect = i3861[1]
  i3860.orthographic = !!i3861[2]
  i3860.orthographicSize = i3861[3]
  i3860.backgroundColor = new pc.Color(i3861[4], i3861[5], i3861[6], i3861[7])
  i3860.nearClipPlane = i3861[8]
  i3860.farClipPlane = i3861[9]
  i3860.fieldOfView = i3861[10]
  i3860.depth = i3861[11]
  i3860.clearFlags = i3861[12]
  i3860.cullingMask = i3861[13]
  i3860.rect = i3861[14]
  request.r(i3861[15], i3861[16], 0, i3860, 'targetTexture')
  i3860.usePhysicalProperties = !!i3861[17]
  i3860.focalLength = i3861[18]
  i3860.sensorSize = new pc.Vec2( i3861[19], i3861[20] )
  i3860.lensShift = new pc.Vec2( i3861[21], i3861[22] )
  i3860.gateFit = i3861[23]
  return i3860
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i3862 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i3863 = data
  i3862.m_ShowDebugText = !!i3863[0]
  i3862.m_ShowCameraFrustum = !!i3863[1]
  i3862.m_IgnoreTimeScale = !!i3863[2]
  request.r(i3863[3], i3863[4], 0, i3862, 'm_WorldUpOverride')
  i3862.m_UpdateMethod = i3863[5]
  i3862.m_BlendUpdateMethod = i3863[6]
  i3862.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i3863[7], i3862.m_DefaultBlend)
  request.r(i3863[8], i3863[9], 0, i3862, 'm_CustomBlends')
  i3862.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i3863[10], i3862.m_CameraCutEvent)
  i3862.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i3863[11], i3862.m_CameraActivatedEvent)
  return i3862
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i3864 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i3865 = data
  i3864.m_Style = i3865[0]
  i3864.m_Time = i3865[1]
  i3864.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i3865[2] } )
  return i3864
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i3866 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i3867 = data
  i3866.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3867[0], i3866.m_PersistentCalls)
  return i3866
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3868 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3869 = data
  var i3871 = i3869[0]
  var i3870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3871.length; i += 1) {
    i3870.add(request.d('UnityEngine.Events.PersistentCall', i3871[i + 0]));
  }
  i3868.m_Calls = i3870
  return i3868
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3874 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3875 = data
  request.r(i3875[0], i3875[1], 0, i3874, 'm_Target')
  i3874.m_TargetAssemblyTypeName = i3875[2]
  i3874.m_MethodName = i3875[3]
  i3874.m_Mode = i3875[4]
  i3874.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3875[5], i3874.m_Arguments)
  i3874.m_CallState = i3875[6]
  return i3874
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i3876 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i3877 = data
  i3876.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3877[0], i3876.m_PersistentCalls)
  return i3876
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i3878 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i3879 = data
  request.r(i3879[0], i3879[1], 0, i3878, 'm_LookAt')
  request.r(i3879[2], i3879[3], 0, i3878, 'm_Follow')
  i3878.m_Lens = request.d('Cinemachine.LensSettings', i3879[4], i3878.m_Lens)
  i3878.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i3879[5], i3878.m_Transitions)
  var i3881 = i3879[6]
  var i3880 = []
  for(var i = 0; i < i3881.length; i += 1) {
    i3880.push( i3881[i + 0] );
  }
  i3878.m_ExcludedPropertiesInInspector = i3880
  var i3883 = i3879[7]
  var i3882 = []
  for(var i = 0; i < i3883.length; i += 1) {
    i3882.push( i3883[i + 0] );
  }
  i3878.m_LockStageInInspector = i3882
  i3878.m_Priority = i3879[8]
  i3878.m_StandbyUpdate = i3879[9]
  i3878.m_LegacyBlendHint = i3879[10]
  request.r(i3879[11], i3879[12], 0, i3878, 'm_ComponentOwner')
  i3878.m_StreamingVersion = i3879[13]
  return i3878
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i3884 = root || request.c( 'Cinemachine.LensSettings' )
  var i3885 = data
  i3884.FieldOfView = i3885[0]
  i3884.OrthographicSize = i3885[1]
  i3884.NearClipPlane = i3885[2]
  i3884.FarClipPlane = i3885[3]
  i3884.Dutch = i3885[4]
  i3884.ModeOverride = i3885[5]
  i3884.LensShift = new pc.Vec2( i3885[6], i3885[7] )
  i3884.GateFit = i3885[8]
  i3884.m_SensorSize = new pc.Vec2( i3885[9], i3885[10] )
  return i3884
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i3886 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i3887 = data
  i3886.m_BlendHint = i3887[0]
  i3886.m_InheritPosition = !!i3887[1]
  i3886.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i3887[2], i3886.m_OnCameraLive)
  return i3886
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i3892 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i3893 = data
  return i3892
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i3894 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i3895 = data
  i3894.m_TrackedObjectOffset = new pc.Vec3( i3895[0], i3895[1], i3895[2] )
  i3894.m_LookaheadTime = i3895[3]
  i3894.m_LookaheadSmoothing = i3895[4]
  i3894.m_LookaheadIgnoreY = !!i3895[5]
  i3894.m_HorizontalDamping = i3895[6]
  i3894.m_VerticalDamping = i3895[7]
  i3894.m_ScreenX = i3895[8]
  i3894.m_ScreenY = i3895[9]
  i3894.m_DeadZoneWidth = i3895[10]
  i3894.m_DeadZoneHeight = i3895[11]
  i3894.m_SoftZoneWidth = i3895[12]
  i3894.m_SoftZoneHeight = i3895[13]
  i3894.m_BiasX = i3895[14]
  i3894.m_BiasY = i3895[15]
  i3894.m_CenterOnActivate = !!i3895[16]
  return i3894
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i3896 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i3897 = data
  i3896.m_BindingMode = i3897[0]
  i3896.m_FollowOffset = new pc.Vec3( i3897[1], i3897[2], i3897[3] )
  i3896.m_XDamping = i3897[4]
  i3896.m_YDamping = i3897[5]
  i3896.m_ZDamping = i3897[6]
  i3896.m_AngularDampingMode = i3897[7]
  i3896.m_PitchDamping = i3897[8]
  i3896.m_YawDamping = i3897[9]
  i3896.m_RollDamping = i3897[10]
  i3896.m_AngularDamping = i3897[11]
  return i3896
}

Deserializers["Cinemachine.CinemachineFramingTransposer"] = function (request, data, root) {
  var i3898 = root || request.c( 'Cinemachine.CinemachineFramingTransposer' )
  var i3899 = data
  i3898.m_TrackedObjectOffset = new pc.Vec3( i3899[0], i3899[1], i3899[2] )
  i3898.m_LookaheadTime = i3899[3]
  i3898.m_LookaheadSmoothing = i3899[4]
  i3898.m_LookaheadIgnoreY = !!i3899[5]
  i3898.m_XDamping = i3899[6]
  i3898.m_YDamping = i3899[7]
  i3898.m_ZDamping = i3899[8]
  i3898.m_TargetMovementOnly = !!i3899[9]
  i3898.m_ScreenX = i3899[10]
  i3898.m_ScreenY = i3899[11]
  i3898.m_CameraDistance = i3899[12]
  i3898.m_DeadZoneWidth = i3899[13]
  i3898.m_DeadZoneHeight = i3899[14]
  i3898.m_DeadZoneDepth = i3899[15]
  i3898.m_UnlimitedSoftZone = !!i3899[16]
  i3898.m_SoftZoneWidth = i3899[17]
  i3898.m_SoftZoneHeight = i3899[18]
  i3898.m_BiasX = i3899[19]
  i3898.m_BiasY = i3899[20]
  i3898.m_CenterOnActivate = !!i3899[21]
  i3898.m_GroupFramingMode = i3899[22]
  i3898.m_AdjustmentMode = i3899[23]
  i3898.m_GroupFramingSize = i3899[24]
  i3898.m_MaxDollyIn = i3899[25]
  i3898.m_MaxDollyOut = i3899[26]
  i3898.m_MinimumDistance = i3899[27]
  i3898.m_MaximumDistance = i3899[28]
  i3898.m_MinimumFOV = i3899[29]
  i3898.m_MaximumFOV = i3899[30]
  i3898.m_MinimumOrthoSize = i3899[31]
  i3898.m_MaximumOrthoSize = i3899[32]
  return i3898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3901 = data
  i3900.enabled = !!i3901[0]
  i3900.type = i3901[1]
  i3900.color = new pc.Color(i3901[2], i3901[3], i3901[4], i3901[5])
  i3900.cullingMask = i3901[6]
  i3900.intensity = i3901[7]
  i3900.range = i3901[8]
  i3900.spotAngle = i3901[9]
  i3900.shadows = i3901[10]
  i3900.shadowNormalBias = i3901[11]
  i3900.shadowBias = i3901[12]
  i3900.shadowStrength = i3901[13]
  i3900.shadowResolution = i3901[14]
  i3900.lightmapBakeType = i3901[15]
  i3900.renderMode = i3901[16]
  request.r(i3901[17], i3901[18], 0, i3900, 'cookie')
  i3900.cookieSize = i3901[19]
  return i3900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3903 = data
  i3902.center = new pc.Vec3( i3903[0], i3903[1], i3903[2] )
  i3902.size = new pc.Vec3( i3903[3], i3903[4], i3903[5] )
  i3902.enabled = !!i3903[6]
  i3902.isTrigger = !!i3903[7]
  request.r(i3903[8], i3903[9], 0, i3902, 'material')
  return i3902
}

Deserializers["ShelfGuide"] = function (request, data, root) {
  var i3904 = root || request.c( 'ShelfGuide' )
  var i3905 = data
  i3904.scale = new pc.Vec3( i3905[0], i3905[1], i3905[2] )
  request.r(i3905[3], i3905[4], 0, i3904, 'boxColider')
  request.r(i3905[5], i3905[6], 0, i3904, 'shelf')
  request.r(i3905[7], i3905[8], 0, i3904, 'price')
  request.r(i3905[9], i3905[10], 0, i3904, 'tu')
  i3904.isDone = !!i3905[11]
  return i3904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3907 = data
  request.r(i3907[0], i3907[1], 0, i3906, 'animatorController')
  request.r(i3907[2], i3907[3], 0, i3906, 'avatar')
  i3906.updateMode = i3907[4]
  i3906.hasTransformHierarchy = !!i3907[5]
  i3906.applyRootMotion = !!i3907[6]
  var i3909 = i3907[7]
  var i3908 = []
  for(var i = 0; i < i3909.length; i += 2) {
  request.r(i3909[i + 0], i3909[i + 1], 2, i3908, '')
  }
  i3906.humanBones = i3908
  i3906.enabled = !!i3907[8]
  return i3906
}

Deserializers["Animal"] = function (request, data, root) {
  var i3912 = root || request.c( 'Animal' )
  var i3913 = data
  return i3912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i3914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i3915 = data
  i3914.enabled = !!i3915[0]
  request.r(i3915[1], i3915[2], 0, i3914, 'sharedMaterial')
  var i3917 = i3915[3]
  var i3916 = []
  for(var i = 0; i < i3917.length; i += 2) {
  request.r(i3917[i + 0], i3917[i + 1], 2, i3916, '')
  }
  i3914.sharedMaterials = i3916
  i3914.receiveShadows = !!i3915[4]
  i3914.shadowCastingMode = i3915[5]
  i3914.sortingLayerID = i3915[6]
  i3914.sortingOrder = i3915[7]
  i3914.lightmapIndex = i3915[8]
  i3914.lightmapSceneIndex = i3915[9]
  i3914.lightmapScaleOffset = new pc.Vec4( i3915[10], i3915[11], i3915[12], i3915[13] )
  i3914.lightProbeUsage = i3915[14]
  i3914.reflectionProbeUsage = i3915[15]
  request.r(i3915[16], i3915[17], 0, i3914, 'sharedMesh')
  var i3919 = i3915[18]
  var i3918 = []
  for(var i = 0; i < i3919.length; i += 2) {
  request.r(i3919[i + 0], i3919[i + 1], 2, i3918, '')
  }
  i3914.bones = i3918
  i3914.updateWhenOffscreen = !!i3915[19]
  i3914.localBounds = i3915[20]
  request.r(i3915[21], i3915[22], 0, i3914, 'rootBone')
  var i3921 = i3915[23]
  var i3920 = []
  for(var i = 0; i < i3921.length; i += 1) {
    i3920.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i3921[i + 0]) );
  }
  i3914.blendShapesWeights = i3920
  return i3914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i3924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i3925 = data
  i3924.weight = i3925[0]
  return i3924
}

Deserializers["DoTweenMove"] = function (request, data, root) {
  var i3926 = root || request.c( 'DoTweenMove' )
  var i3927 = data
  i3926.targetPos = new pc.Vec3( i3927[0], i3927[1], i3927[2] )
  i3926.duration = i3927[3]
  i3926.setLoop = !!i3927[4]
  i3926.doLocal = !!i3927[5]
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3929 = data
  i3928.pivot = new pc.Vec2( i3929[0], i3929[1] )
  i3928.anchorMin = new pc.Vec2( i3929[2], i3929[3] )
  i3928.anchorMax = new pc.Vec2( i3929[4], i3929[5] )
  i3928.sizeDelta = new pc.Vec2( i3929[6], i3929[7] )
  i3928.anchoredPosition3D = new pc.Vec3( i3929[8], i3929[9], i3929[10] )
  i3928.rotation = new pc.Quat(i3929[11], i3929[12], i3929[13], i3929[14])
  i3928.scale = new pc.Vec3( i3929[15], i3929[16], i3929[17] )
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3931 = data
  i3930.enabled = !!i3931[0]
  i3930.planeDistance = i3931[1]
  i3930.referencePixelsPerUnit = i3931[2]
  i3930.isFallbackOverlay = !!i3931[3]
  i3930.renderMode = i3931[4]
  i3930.renderOrder = i3931[5]
  i3930.sortingLayerName = i3931[6]
  i3930.sortingOrder = i3931[7]
  i3930.scaleFactor = i3931[8]
  request.r(i3931[9], i3931[10], 0, i3930, 'worldCamera')
  i3930.overrideSorting = !!i3931[11]
  i3930.pixelPerfect = !!i3931[12]
  i3930.targetDisplay = i3931[13]
  i3930.overridePixelPerfect = !!i3931[14]
  return i3930
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3932 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3933 = data
  i3932.m_UiScaleMode = i3933[0]
  i3932.m_ReferencePixelsPerUnit = i3933[1]
  i3932.m_ScaleFactor = i3933[2]
  i3932.m_ReferenceResolution = new pc.Vec2( i3933[3], i3933[4] )
  i3932.m_ScreenMatchMode = i3933[5]
  i3932.m_MatchWidthOrHeight = i3933[6]
  i3932.m_PhysicalUnit = i3933[7]
  i3932.m_FallbackScreenDPI = i3933[8]
  i3932.m_DefaultSpriteDPI = i3933[9]
  i3932.m_DynamicPixelsPerUnit = i3933[10]
  i3932.m_PresetInfoIsWorld = !!i3933[11]
  return i3932
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3934 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3935 = data
  i3934.m_IgnoreReversedGraphics = !!i3935[0]
  i3934.m_BlockingObjects = i3935[1]
  i3934.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3935[2] )
  return i3934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3937 = data
  i3936.cullTransparentMesh = !!i3937[0]
  return i3936
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3938 = root || request.c( 'UnityEngine.UI.Image' )
  var i3939 = data
  request.r(i3939[0], i3939[1], 0, i3938, 'm_Sprite')
  i3938.m_Type = i3939[2]
  i3938.m_PreserveAspect = !!i3939[3]
  i3938.m_FillCenter = !!i3939[4]
  i3938.m_FillMethod = i3939[5]
  i3938.m_FillAmount = i3939[6]
  i3938.m_FillClockwise = !!i3939[7]
  i3938.m_FillOrigin = i3939[8]
  i3938.m_UseSpriteMesh = !!i3939[9]
  i3938.m_PixelsPerUnitMultiplier = i3939[10]
  request.r(i3939[11], i3939[12], 0, i3938, 'm_Material')
  i3938.m_Maskable = !!i3939[13]
  i3938.m_Color = new pc.Color(i3939[14], i3939[15], i3939[16], i3939[17])
  i3938.m_RaycastTarget = !!i3939[18]
  i3938.m_RaycastPadding = new pc.Vec4( i3939[19], i3939[20], i3939[21], i3939[22] )
  return i3938
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3940 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3941 = data
  i3940.m_hasFontAssetChanged = !!i3941[0]
  request.r(i3941[1], i3941[2], 0, i3940, 'm_baseMaterial')
  i3940.m_maskOffset = new pc.Vec4( i3941[3], i3941[4], i3941[5], i3941[6] )
  i3940.m_text = i3941[7]
  i3940.m_isRightToLeft = !!i3941[8]
  request.r(i3941[9], i3941[10], 0, i3940, 'm_fontAsset')
  request.r(i3941[11], i3941[12], 0, i3940, 'm_sharedMaterial')
  var i3943 = i3941[13]
  var i3942 = []
  for(var i = 0; i < i3943.length; i += 2) {
  request.r(i3943[i + 0], i3943[i + 1], 2, i3942, '')
  }
  i3940.m_fontSharedMaterials = i3942
  request.r(i3941[14], i3941[15], 0, i3940, 'm_fontMaterial')
  var i3945 = i3941[16]
  var i3944 = []
  for(var i = 0; i < i3945.length; i += 2) {
  request.r(i3945[i + 0], i3945[i + 1], 2, i3944, '')
  }
  i3940.m_fontMaterials = i3944
  i3940.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3941[17], i3941[18], i3941[19], i3941[20])
  i3940.m_fontColor = new pc.Color(i3941[21], i3941[22], i3941[23], i3941[24])
  i3940.m_enableVertexGradient = !!i3941[25]
  i3940.m_colorMode = i3941[26]
  i3940.m_fontColorGradient = request.d('TMPro.VertexGradient', i3941[27], i3940.m_fontColorGradient)
  request.r(i3941[28], i3941[29], 0, i3940, 'm_fontColorGradientPreset')
  request.r(i3941[30], i3941[31], 0, i3940, 'm_spriteAsset')
  i3940.m_tintAllSprites = !!i3941[32]
  request.r(i3941[33], i3941[34], 0, i3940, 'm_StyleSheet')
  i3940.m_TextStyleHashCode = i3941[35]
  i3940.m_overrideHtmlColors = !!i3941[36]
  i3940.m_faceColor = UnityEngine.Color32.ConstructColor(i3941[37], i3941[38], i3941[39], i3941[40])
  i3940.m_fontSize = i3941[41]
  i3940.m_fontSizeBase = i3941[42]
  i3940.m_fontWeight = i3941[43]
  i3940.m_enableAutoSizing = !!i3941[44]
  i3940.m_fontSizeMin = i3941[45]
  i3940.m_fontSizeMax = i3941[46]
  i3940.m_fontStyle = i3941[47]
  i3940.m_HorizontalAlignment = i3941[48]
  i3940.m_VerticalAlignment = i3941[49]
  i3940.m_textAlignment = i3941[50]
  i3940.m_characterSpacing = i3941[51]
  i3940.m_wordSpacing = i3941[52]
  i3940.m_lineSpacing = i3941[53]
  i3940.m_lineSpacingMax = i3941[54]
  i3940.m_paragraphSpacing = i3941[55]
  i3940.m_charWidthMaxAdj = i3941[56]
  i3940.m_enableWordWrapping = !!i3941[57]
  i3940.m_wordWrappingRatios = i3941[58]
  i3940.m_overflowMode = i3941[59]
  request.r(i3941[60], i3941[61], 0, i3940, 'm_linkedTextComponent')
  request.r(i3941[62], i3941[63], 0, i3940, 'parentLinkedComponent')
  i3940.m_enableKerning = !!i3941[64]
  i3940.m_enableExtraPadding = !!i3941[65]
  i3940.checkPaddingRequired = !!i3941[66]
  i3940.m_isRichText = !!i3941[67]
  i3940.m_parseCtrlCharacters = !!i3941[68]
  i3940.m_isOrthographic = !!i3941[69]
  i3940.m_isCullingEnabled = !!i3941[70]
  i3940.m_horizontalMapping = i3941[71]
  i3940.m_verticalMapping = i3941[72]
  i3940.m_uvLineOffset = i3941[73]
  i3940.m_geometrySortingOrder = i3941[74]
  i3940.m_IsTextObjectScaleStatic = !!i3941[75]
  i3940.m_VertexBufferAutoSizeReduction = !!i3941[76]
  i3940.m_useMaxVisibleDescender = !!i3941[77]
  i3940.m_pageToDisplay = i3941[78]
  i3940.m_margin = new pc.Vec4( i3941[79], i3941[80], i3941[81], i3941[82] )
  i3940.m_isUsingLegacyAnimationComponent = !!i3941[83]
  i3940.m_isVolumetricText = !!i3941[84]
  request.r(i3941[85], i3941[86], 0, i3940, 'm_Material')
  i3940.m_Maskable = !!i3941[87]
  i3940.m_Color = new pc.Color(i3941[88], i3941[89], i3941[90], i3941[91])
  i3940.m_RaycastTarget = !!i3941[92]
  i3940.m_RaycastPadding = new pc.Vec4( i3941[93], i3941[94], i3941[95], i3941[96] )
  return i3940
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3946 = root || request.c( 'TMPro.VertexGradient' )
  var i3947 = data
  i3946.topLeft = new pc.Color(i3947[0], i3947[1], i3947[2], i3947[3])
  i3946.topRight = new pc.Color(i3947[4], i3947[5], i3947[6], i3947[7])
  i3946.bottomLeft = new pc.Color(i3947[8], i3947[9], i3947[10], i3947[11])
  i3946.bottomRight = new pc.Color(i3947[12], i3947[13], i3947[14], i3947[15])
  return i3946
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3948 = root || request.c( 'UnityEngine.UI.Text' )
  var i3949 = data
  i3948.m_FontData = request.d('UnityEngine.UI.FontData', i3949[0], i3948.m_FontData)
  i3948.m_Text = i3949[1]
  request.r(i3949[2], i3949[3], 0, i3948, 'm_Material')
  i3948.m_Maskable = !!i3949[4]
  i3948.m_Color = new pc.Color(i3949[5], i3949[6], i3949[7], i3949[8])
  i3948.m_RaycastTarget = !!i3949[9]
  i3948.m_RaycastPadding = new pc.Vec4( i3949[10], i3949[11], i3949[12], i3949[13] )
  return i3948
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3950 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3951 = data
  request.r(i3951[0], i3951[1], 0, i3950, 'm_Font')
  i3950.m_FontSize = i3951[2]
  i3950.m_FontStyle = i3951[3]
  i3950.m_BestFit = !!i3951[4]
  i3950.m_MinSize = i3951[5]
  i3950.m_MaxSize = i3951[6]
  i3950.m_Alignment = i3951[7]
  i3950.m_AlignByGeometry = !!i3951[8]
  i3950.m_RichText = !!i3951[9]
  i3950.m_HorizontalOverflow = i3951[10]
  i3950.m_VerticalOverflow = i3951[11]
  i3950.m_LineSpacing = i3951[12]
  return i3950
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i3952 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i3953 = data
  i3952.m_StartCorner = i3953[0]
  i3952.m_StartAxis = i3953[1]
  i3952.m_CellSize = new pc.Vec2( i3953[2], i3953[3] )
  i3952.m_Spacing = new pc.Vec2( i3953[4], i3953[5] )
  i3952.m_Constraint = i3953[6]
  i3952.m_ConstraintCount = i3953[7]
  i3952.m_Padding = UnityEngine.RectOffset.FromPaddings(i3953[8], i3953[9], i3953[10], i3953[11])
  i3952.m_ChildAlignment = i3953[12]
  return i3952
}

Deserializers["ContainerProducttPetShop"] = function (request, data, root) {
  var i3954 = root || request.c( 'ContainerProducttPetShop' )
  var i3955 = data
  var i3957 = i3955[0]
  var i3956 = new (System.Collections.Generic.List$1(Bridge.ns('ElementProductPetShop')))
  for(var i = 0; i < i3957.length; i += 2) {
  request.r(i3957[i + 0], i3957[i + 1], 1, i3956, '')
  }
  i3954.lstProduct = i3956
  request.r(i3955[1], i3955[2], 0, i3954, 'productData')
  return i3954
}

Deserializers["ElementProductPetShop"] = function (request, data, root) {
  var i3960 = root || request.c( 'ElementProductPetShop' )
  var i3961 = data
  i3960.typeProduct = i3961[0]
  request.r(i3961[1], i3961[2], 0, i3960, 'icon')
  request.r(i3961[3], i3961[4], 0, i3960, 'productName')
  request.r(i3961[5], i3961[6], 0, i3960, 'companyName')
  request.r(i3961[7], i3961[8], 0, i3960, 'unitPrice')
  request.r(i3961[9], i3961[10], 0, i3960, 'quanity')
  request.r(i3961[11], i3961[12], 0, i3960, 'txtTotalPrice')
  request.r(i3961[13], i3961[14], 0, i3960, 'btnOn')
  request.r(i3961[15], i3961[16], 0, i3960, 'btnOff')
  request.r(i3961[17], i3961[18], 0, i3960, 'btnBuy')
  request.r(i3961[19], i3961[20], 0, i3960, 'btnSub')
  request.r(i3961[21], i3961[22], 0, i3960, 'btnAdd')
  return i3960
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3962 = root || request.c( 'UnityEngine.UI.Button' )
  var i3963 = data
  i3962.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3963[0], i3962.m_OnClick)
  i3962.m_Navigation = request.d('UnityEngine.UI.Navigation', i3963[1], i3962.m_Navigation)
  i3962.m_Transition = i3963[2]
  i3962.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3963[3], i3962.m_Colors)
  i3962.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3963[4], i3962.m_SpriteState)
  i3962.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3963[5], i3962.m_AnimationTriggers)
  i3962.m_Interactable = !!i3963[6]
  request.r(i3963[7], i3963[8], 0, i3962, 'm_TargetGraphic')
  return i3962
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3964 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3965 = data
  i3964.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3965[0], i3964.m_PersistentCalls)
  return i3964
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3966 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3967 = data
  request.r(i3967[0], i3967[1], 0, i3966, 'm_ObjectArgument')
  i3966.m_ObjectArgumentAssemblyTypeName = i3967[2]
  i3966.m_IntArgument = i3967[3]
  i3966.m_FloatArgument = i3967[4]
  i3966.m_StringArgument = i3967[5]
  i3966.m_BoolArgument = !!i3967[6]
  return i3966
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3968 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3969 = data
  i3968.m_Mode = i3969[0]
  i3968.m_WrapAround = !!i3969[1]
  request.r(i3969[2], i3969[3], 0, i3968, 'm_SelectOnUp')
  request.r(i3969[4], i3969[5], 0, i3968, 'm_SelectOnDown')
  request.r(i3969[6], i3969[7], 0, i3968, 'm_SelectOnLeft')
  request.r(i3969[8], i3969[9], 0, i3968, 'm_SelectOnRight')
  return i3968
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3970 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3971 = data
  i3970.m_NormalColor = new pc.Color(i3971[0], i3971[1], i3971[2], i3971[3])
  i3970.m_HighlightedColor = new pc.Color(i3971[4], i3971[5], i3971[6], i3971[7])
  i3970.m_PressedColor = new pc.Color(i3971[8], i3971[9], i3971[10], i3971[11])
  i3970.m_SelectedColor = new pc.Color(i3971[12], i3971[13], i3971[14], i3971[15])
  i3970.m_DisabledColor = new pc.Color(i3971[16], i3971[17], i3971[18], i3971[19])
  i3970.m_ColorMultiplier = i3971[20]
  i3970.m_FadeDuration = i3971[21]
  return i3970
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3972 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3973 = data
  request.r(i3973[0], i3973[1], 0, i3972, 'm_HighlightedSprite')
  request.r(i3973[2], i3973[3], 0, i3972, 'm_PressedSprite')
  request.r(i3973[4], i3973[5], 0, i3972, 'm_SelectedSprite')
  request.r(i3973[6], i3973[7], 0, i3972, 'm_DisabledSprite')
  return i3972
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3974 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3975 = data
  i3974.m_NormalTrigger = i3975[0]
  i3974.m_HighlightedTrigger = i3975[1]
  i3974.m_PressedTrigger = i3975[2]
  i3974.m_SelectedTrigger = i3975[3]
  i3974.m_DisabledTrigger = i3975[4]
  return i3974
}

Deserializers["AnimScaleButton"] = function (request, data, root) {
  var i3976 = root || request.c( 'AnimScaleButton' )
  var i3977 = data
  request.r(i3977[0], i3977[1], 0, i3976, '_gScale')
  i3976._fromScale = i3977[2]
  i3976._toScale = i3977[3]
  i3976._duration = i3977[4]
  return i3976
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i3978 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i3979 = data
  request.r(i3979[0], i3979[1], 0, i3978, 'skeletonDataAsset')
  i3978.initialSkinName = i3979[2]
  i3978.initialFlipX = !!i3979[3]
  i3978.initialFlipY = !!i3979[4]
  i3978.startingAnimation = i3979[5]
  i3978.startingLoop = !!i3979[6]
  i3978.timeScale = i3979[7]
  i3978.freeze = !!i3979[8]
  i3978.updateWhenInvisible = i3979[9]
  i3978.unscaledTime = !!i3979[10]
  i3978.allowMultipleCanvasRenderers = !!i3979[11]
  var i3981 = i3979[12]
  var i3980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i3981.length; i += 2) {
  request.r(i3981[i + 0], i3981[i + 1], 1, i3980, '')
  }
  i3978.canvasRenderers = i3980
  i3978.enableSeparatorSlots = !!i3979[13]
  i3978.updateSeparatorPartLocation = !!i3979[14]
  var i3983 = i3979[15]
  var i3982 = []
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.push( i3983[i + 0] );
  }
  i3978.separatorSlotNames = i3982
  var i3985 = i3979[16]
  var i3984 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3985.length; i += 2) {
  request.r(i3985[i + 0], i3985[i + 1], 1, i3984, '')
  }
  i3978.separatorParts = i3984
  i3978.meshGenerator = request.d('Spine.Unity.MeshGenerator', i3979[17], i3978.meshGenerator)
  request.r(i3979[18], i3979[19], 0, i3978, 'm_Material')
  i3978.m_Maskable = !!i3979[20]
  i3978.m_Color = new pc.Color(i3979[21], i3979[22], i3979[23], i3979[24])
  i3978.m_RaycastTarget = !!i3979[25]
  i3978.m_RaycastPadding = new pc.Vec4( i3979[26], i3979[27], i3979[28], i3979[29] )
  return i3978
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i3990 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i3991 = data
  i3990.settings = request.d('Spine.Unity.MeshGenerator+Settings', i3991[0], i3990.settings)
  return i3990
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i3992 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i3993 = data
  i3992.useClipping = !!i3993[0]
  i3992.zSpacing = i3993[1]
  i3992.pmaVertexColors = !!i3993[2]
  i3992.tintBlack = !!i3993[3]
  i3992.canvasGroupTintBlack = !!i3993[4]
  i3992.calculateTangents = !!i3993[5]
  i3992.addNormals = !!i3993[6]
  i3992.immutableTriangles = !!i3993[7]
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i3994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i3995 = data
  i3994.playAutomatically = !!i3995[0]
  request.r(i3995[1], i3995[2], 0, i3994, 'clip')
  var i3997 = i3995[3]
  var i3996 = []
  for(var i = 0; i < i3997.length; i += 2) {
  request.r(i3997[i + 0], i3997[i + 1], 2, i3996, '')
  }
  i3994.clips = i3996
  i3994.wrapMode = i3995[4]
  i3994.enabled = !!i3995[5]
  return i3994
}

Deserializers["TouchInput"] = function (request, data, root) {
  var i4000 = root || request.c( 'TouchInput' )
  var i4001 = data
  return i4000
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4002 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4003 = data
  request.r(i4003[0], i4003[1], 0, i4002, 'm_FirstSelected')
  i4002.m_sendNavigationEvents = !!i4003[2]
  i4002.m_DragThreshold = i4003[3]
  return i4002
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4004 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4005 = data
  i4004.m_HorizontalAxis = i4005[0]
  i4004.m_VerticalAxis = i4005[1]
  i4004.m_SubmitButton = i4005[2]
  i4004.m_CancelButton = i4005[3]
  i4004.m_InputActionsPerSecond = i4005[4]
  i4004.m_RepeatDelay = i4005[5]
  i4004.m_ForceModuleActive = !!i4005[6]
  i4004.m_SendPointerHoverToParent = !!i4005[7]
  return i4004
}

Deserializers["GameManagerPetShop5"] = function (request, data, root) {
  var i4006 = root || request.c( 'GameManagerPetShop5' )
  var i4007 = data
  request.r(i4007[0], i4007[1], 0, i4006, 'charFollow')
  i4006.mission = i4007[2]
  request.r(i4007[3], i4007[4], 0, i4006, 'btnThrow')
  request.r(i4007[5], i4007[6], 0, i4006, 'handTut')
  request.r(i4007[7], i4007[8], 0, i4006, 'cinemachineBrain')
  request.r(i4007[9], i4007[10], 0, i4006, 'VC_camFollow')
  var i4009 = i4007[11]
  var i4008 = new (System.Collections.Generic.List$1(Bridge.ns('ShelfGuide')))
  for(var i = 0; i < i4009.length; i += 2) {
  request.r(i4009[i + 0], i4009[i + 1], 1, i4008, '')
  }
  i4006.lstGuideShelf = i4008
  request.r(i4007[12], i4007[13], 0, i4006, 'VC_Start')
  request.r(i4007[14], i4007[15], 0, i4006, 'VC_camLookDown')
  request.r(i4007[16], i4007[17], 0, i4006, 'boxCat')
  request.r(i4007[18], i4007[19], 0, i4006, 'cat')
  request.r(i4007[20], i4007[21], 0, i4006, 'catInBox')
  request.r(i4007[22], i4007[23], 0, i4006, 'VC_camRotateCatCage')
  request.r(i4007[24], i4007[25], 0, i4006, 'matebox')
  request.r(i4007[26], i4007[27], 0, i4006, 'mateboxOL')
  request.r(i4007[28], i4007[29], 0, i4006, 'boxCatMesh')
  i4006.isDoneCat = !!i4007[30]
  request.r(i4007[31], i4007[32], 0, i4006, 'VC_camMoveToPlaceObj')
  request.r(i4007[33], i4007[34], 0, i4006, 'VC_camMoveToPlaceObj1')
  request.r(i4007[35], i4007[36], 0, i4006, 'VC_camMoveToPlaceObj2')
  i4006.isHoldInPlace = !!i4007[37]
  i4006.delayTime = i4007[38]
  request.r(i4007[39], i4007[40], 0, i4006, 'VC_camEndGame')
  request.r(i4007[41], i4007[42], 0, i4006, 'productData')
  request.r(i4007[43], i4007[44], 0, i4006, 'shopping')
  request.r(i4007[45], i4007[46], 0, i4006, 'handGuide')
  request.r(i4007[47], i4007[48], 0, i4006, 'txtMoney')
  request.r(i4007[49], i4007[50], 0, i4006, 'txtMission')
  request.r(i4007[51], i4007[52], 0, i4006, 'missionObj')
  request.r(i4007[53], i4007[54], 0, i4006, 'sliderProgress')
  i4006.totalMoney = i4007[55]
  request.r(i4007[56], i4007[57], 0, i4006, 'lstPosParent')
  request.r(i4007[58], i4007[59], 0, i4006, 'container')
  request.r(i4007[60], i4007[61], 0, i4006, 'box')
  request.r(i4007[62], i4007[63], 0, i4006, 'btnPlace')
  request.r(i4007[64], i4007[65], 0, i4006, 'parentPosShelf')
  request.r(i4007[66], i4007[67], 0, i4006, 'containerShelf')
  request.r(i4007[68], i4007[69], 0, i4006, 'cameraEnd')
  request.r(i4007[70], i4007[71], 0, i4006, 'readyOpen')
  request.r(i4007[72], i4007[73], 0, i4006, 'btnOpen')
  request.r(i4007[74], i4007[75], 0, i4006, 'arrowOpen')
  request.r(i4007[76], i4007[77], 0, i4006, 'audioManager')
  i4006.isEndGame = !!i4007[78]
  i4006.totalPriceCheckOut = i4007[79]
  request.r(i4007[80], i4007[81], 0, i4006, 'txtPerformCheckout')
  request.r(i4007[82], i4007[83], 0, i4006, 'txtTotalMoney')
  request.r(i4007[84], i4007[85], 0, i4006, 'guideClick')
  request.r(i4007[86], i4007[87], 0, i4006, 'hanGuideClick1')
  request.r(i4007[88], i4007[89], 0, i4006, 'hanGuideClick2')
  request.r(i4007[90], i4007[91], 0, i4006, 'hanGuideClick3')
  i4006.availableSecondGuide = !!i4007[92]
  i4006.availableThirtyGuide = !!i4007[93]
  request.r(i4007[94], i4007[95], 0, i4006, 'txtTotalPriceCard')
  request.r(i4007[96], i4007[97], 0, i4006, 'checkoutCard')
  request.r(i4007[98], i4007[99], 0, i4006, 'txtReceiveCash')
  request.r(i4007[100], i4007[101], 0, i4006, 'txtTotalPriceCash')
  request.r(i4007[102], i4007[103], 0, i4006, 'txtChangeCash')
  request.r(i4007[104], i4007[105], 0, i4006, 'txtGivingCashDF')
  request.r(i4007[106], i4007[107], 0, i4006, 'txtGivingCash')
  request.r(i4007[108], i4007[109], 0, i4006, 'checkoutCash')
  request.r(i4007[110], i4007[111], 0, i4006, 'dashCard')
  request.r(i4007[112], i4007[113], 0, i4006, 'dashCash')
  request.r(i4007[114], i4007[115], 0, i4006, 'uiChecKOutCard')
  request.r(i4007[116], i4007[117], 0, i4006, 'uiChecKOutCash')
  request.r(i4007[118], i4007[119], 0, i4006, 'currentCustomer')
  return i4006
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i4012 = root || request.c( 'AudioManager' )
  var i4013 = data
  request.r(i4013[0], i4013[1], 0, i4012, 'audioSourceFX')
  request.r(i4013[2], i4013[3], 0, i4012, 'audioSourceBG')
  request.r(i4013[4], i4013[5], 0, i4012, 'clipClick')
  request.r(i4013[6], i4013[7], 0, i4012, 'clipScan')
  request.r(i4013[8], i4013[9], 0, i4012, 'clipOpenCash')
  request.r(i4013[10], i4013[11], 0, i4012, 'clipPlace')
  request.r(i4013[12], i4013[13], 0, i4012, 'clipGiveCash')
  request.r(i4013[14], i4013[15], 0, i4012, 'clipGiveCoin')
  request.r(i4013[16], i4013[17], 0, i4012, 'clipCalculator')
  request.r(i4013[18], i4013[19], 0, i4012, 'clipOk')
  request.r(i4013[20], i4013[21], 0, i4012, 'clipWrong')
  request.r(i4013[22], i4013[23], 0, i4012, 'clipMoveBox')
  request.r(i4013[24], i4013[25], 0, i4012, 'clipMeo')
  request.r(i4013[26], i4013[27], 0, i4012, 'clipCorrect')
  return i4012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4015 = data
  request.r(i4015[0], i4015[1], 0, i4014, 'clip')
  request.r(i4015[2], i4015[3], 0, i4014, 'outputAudioMixerGroup')
  i4014.playOnAwake = !!i4015[4]
  i4014.loop = !!i4015[5]
  i4014.time = i4015[6]
  i4014.volume = i4015[7]
  i4014.pitch = i4015[8]
  i4014.enabled = !!i4015[9]
  return i4014
}

Deserializers["RaycastShelf"] = function (request, data, root) {
  var i4016 = root || request.c( 'RaycastShelf' )
  var i4017 = data
  request.r(i4017[0], i4017[1], 0, i4016, 'guide')
  return i4016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4019 = data
  i4018.ambientIntensity = i4019[0]
  i4018.reflectionIntensity = i4019[1]
  i4018.ambientMode = i4019[2]
  i4018.ambientLight = new pc.Color(i4019[3], i4019[4], i4019[5], i4019[6])
  i4018.ambientSkyColor = new pc.Color(i4019[7], i4019[8], i4019[9], i4019[10])
  i4018.ambientGroundColor = new pc.Color(i4019[11], i4019[12], i4019[13], i4019[14])
  i4018.ambientEquatorColor = new pc.Color(i4019[15], i4019[16], i4019[17], i4019[18])
  i4018.fogColor = new pc.Color(i4019[19], i4019[20], i4019[21], i4019[22])
  i4018.fogEndDistance = i4019[23]
  i4018.fogStartDistance = i4019[24]
  i4018.fogDensity = i4019[25]
  i4018.fog = !!i4019[26]
  request.r(i4019[27], i4019[28], 0, i4018, 'skybox')
  i4018.fogMode = i4019[29]
  var i4021 = i4019[30]
  var i4020 = []
  for(var i = 0; i < i4021.length; i += 1) {
    i4020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4021[i + 0]) );
  }
  i4018.lightmaps = i4020
  i4018.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4019[31], i4018.lightProbes)
  i4018.lightmapsMode = i4019[32]
  i4018.mixedBakeMode = i4019[33]
  i4018.environmentLightingMode = i4019[34]
  i4018.ambientProbe = new pc.SphericalHarmonicsL2(i4019[35])
  i4018.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4019[36])
  i4018.useReferenceAmbientProbe = !!i4019[37]
  request.r(i4019[38], i4019[39], 0, i4018, 'customReflection')
  request.r(i4019[40], i4019[41], 0, i4018, 'defaultReflection')
  i4018.defaultReflectionMode = i4019[42]
  i4018.defaultReflectionResolution = i4019[43]
  i4018.sunLightObjectId = i4019[44]
  i4018.pixelLightCount = i4019[45]
  i4018.defaultReflectionHDR = !!i4019[46]
  i4018.hasLightDataAsset = !!i4019[47]
  i4018.hasManualGenerate = !!i4019[48]
  return i4018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4025 = data
  request.r(i4025[0], i4025[1], 0, i4024, 'lightmapColor')
  request.r(i4025[2], i4025[3], 0, i4024, 'lightmapDirection')
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4026 = root || new UnityEngine.LightProbes()
  var i4027 = data
  return i4026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4035 = data
  var i4037 = i4035[0]
  var i4036 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4037.length; i += 1) {
    i4036.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4037[i + 0]));
  }
  i4034.ShaderCompilationErrors = i4036
  i4034.name = i4035[1]
  i4034.guid = i4035[2]
  var i4039 = i4035[3]
  var i4038 = []
  for(var i = 0; i < i4039.length; i += 1) {
    i4038.push( i4039[i + 0] );
  }
  i4034.shaderDefinedKeywords = i4038
  var i4041 = i4035[4]
  var i4040 = []
  for(var i = 0; i < i4041.length; i += 1) {
    i4040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4041[i + 0]) );
  }
  i4034.passes = i4040
  var i4043 = i4035[5]
  var i4042 = []
  for(var i = 0; i < i4043.length; i += 1) {
    i4042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4043[i + 0]) );
  }
  i4034.usePasses = i4042
  var i4045 = i4035[6]
  var i4044 = []
  for(var i = 0; i < i4045.length; i += 1) {
    i4044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4045[i + 0]) );
  }
  i4034.defaultParameterValues = i4044
  request.r(i4035[7], i4035[8], 0, i4034, 'unityFallbackShader')
  i4034.readDepth = !!i4035[9]
  i4034.isCreatedByShaderGraph = !!i4035[10]
  i4034.usedBatchUniforms = i4035[11]
  return i4034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4049 = data
  i4048.shaderName = i4049[0]
  i4048.errorMessage = i4049[1]
  return i4048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4052 = root || new pc.UnityShaderPass()
  var i4053 = data
  i4052.id = i4053[0]
  i4052.subShaderIndex = i4053[1]
  i4052.name = i4053[2]
  i4052.passType = i4053[3]
  i4052.grabPassTextureName = i4053[4]
  i4052.usePass = !!i4053[5]
  i4052.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[6], i4052.zTest)
  i4052.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[7], i4052.zWrite)
  i4052.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[8], i4052.culling)
  i4052.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4053[9], i4052.blending)
  i4052.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4053[10], i4052.alphaBlending)
  i4052.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[11], i4052.colorWriteMask)
  i4052.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[12], i4052.offsetUnits)
  i4052.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[13], i4052.offsetFactor)
  i4052.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[14], i4052.stencilRef)
  i4052.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[15], i4052.stencilReadMask)
  i4052.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4053[16], i4052.stencilWriteMask)
  i4052.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4053[17], i4052.stencilOp)
  i4052.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4053[18], i4052.stencilOpFront)
  i4052.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4053[19], i4052.stencilOpBack)
  var i4055 = i4053[20]
  var i4054 = []
  for(var i = 0; i < i4055.length; i += 1) {
    i4054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4055[i + 0]) );
  }
  i4052.tags = i4054
  var i4057 = i4053[21]
  var i4056 = []
  for(var i = 0; i < i4057.length; i += 1) {
    i4056.push( i4057[i + 0] );
  }
  i4052.passDefinedKeywords = i4056
  var i4059 = i4053[22]
  var i4058 = []
  for(var i = 0; i < i4059.length; i += 1) {
    i4058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4059[i + 0]) );
  }
  i4052.passDefinedKeywordGroups = i4058
  var i4061 = i4053[23]
  var i4060 = []
  for(var i = 0; i < i4061.length; i += 1) {
    i4060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4061[i + 0]) );
  }
  i4052.variants = i4060
  var i4063 = i4053[24]
  var i4062 = []
  for(var i = 0; i < i4063.length; i += 1) {
    i4062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4063[i + 0]) );
  }
  i4052.excludedVariants = i4062
  i4052.hasDepthReader = !!i4053[25]
  return i4052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4065 = data
  i4064.val = i4065[0]
  i4064.name = i4065[1]
  return i4064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4067 = data
  i4066.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4067[0], i4066.src)
  i4066.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4067[1], i4066.dst)
  i4066.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4067[2], i4066.op)
  return i4066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4069 = data
  i4068.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4069[0], i4068.pass)
  i4068.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4069[1], i4068.fail)
  i4068.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4069[2], i4068.zFail)
  i4068.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4069[3], i4068.comp)
  return i4068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4073 = data
  i4072.name = i4073[0]
  i4072.value = i4073[1]
  return i4072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4077 = data
  var i4079 = i4077[0]
  var i4078 = []
  for(var i = 0; i < i4079.length; i += 1) {
    i4078.push( i4079[i + 0] );
  }
  i4076.keywords = i4078
  i4076.hasDiscard = !!i4077[1]
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4083 = data
  i4082.passId = i4083[0]
  i4082.subShaderIndex = i4083[1]
  var i4085 = i4083[2]
  var i4084 = []
  for(var i = 0; i < i4085.length; i += 1) {
    i4084.push( i4085[i + 0] );
  }
  i4082.keywords = i4084
  i4082.vertexProgram = i4083[3]
  i4082.fragmentProgram = i4083[4]
  i4082.compiledForWebGL2 = !!i4083[5]
  i4082.readDepth = !!i4083[6]
  return i4082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4089 = data
  request.r(i4089[0], i4089[1], 0, i4088, 'shader')
  i4088.pass = i4089[2]
  return i4088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4093 = data
  i4092.name = i4093[0]
  i4092.type = i4093[1]
  i4092.value = new pc.Vec4( i4093[2], i4093[3], i4093[4], i4093[5] )
  i4092.textureValue = i4093[6]
  i4092.shaderPropertyFlag = i4093[7]
  return i4092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4095 = data
  i4094.name = i4095[0]
  request.r(i4095[1], i4095[2], 0, i4094, 'texture')
  i4094.aabb = i4095[3]
  i4094.vertices = i4095[4]
  i4094.triangles = i4095[5]
  i4094.textureRect = UnityEngine.Rect.MinMaxRect(i4095[6], i4095[7], i4095[8], i4095[9])
  i4094.packedRect = UnityEngine.Rect.MinMaxRect(i4095[10], i4095[11], i4095[12], i4095[13])
  i4094.border = new pc.Vec4( i4095[14], i4095[15], i4095[16], i4095[17] )
  i4094.transparency = i4095[18]
  i4094.bounds = i4095[19]
  i4094.pixelsPerUnit = i4095[20]
  i4094.textureWidth = i4095[21]
  i4094.textureHeight = i4095[22]
  i4094.nativeSize = new pc.Vec2( i4095[23], i4095[24] )
  i4094.pivot = new pc.Vec2( i4095[25], i4095[26] )
  i4094.textureRectOffset = new pc.Vec2( i4095[27], i4095[28] )
  return i4094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4097 = data
  i4096.name = i4097[0]
  return i4096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4099 = data
  i4098.name = i4099[0]
  i4098.wrapMode = i4099[1]
  i4098.isLooping = !!i4099[2]
  i4098.length = i4099[3]
  var i4101 = i4099[4]
  var i4100 = []
  for(var i = 0; i < i4101.length; i += 1) {
    i4100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4101[i + 0]) );
  }
  i4098.curves = i4100
  var i4103 = i4099[5]
  var i4102 = []
  for(var i = 0; i < i4103.length; i += 1) {
    i4102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4103[i + 0]) );
  }
  i4098.events = i4102
  i4098.halfPrecision = !!i4099[6]
  i4098._frameRate = i4099[7]
  i4098.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4099[8], i4098.localBounds)
  i4098.hasMuscleCurves = !!i4099[9]
  var i4105 = i4099[10]
  var i4104 = []
  for(var i = 0; i < i4105.length; i += 1) {
    i4104.push( i4105[i + 0] );
  }
  i4098.clipMuscleConstant = i4104
  i4098.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4099[11], i4098.clipBindingConstant)
  return i4098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4109 = data
  i4108.path = i4109[0]
  i4108.hash = i4109[1]
  i4108.componentType = i4109[2]
  i4108.property = i4109[3]
  i4108.keys = i4109[4]
  var i4111 = i4109[5]
  var i4110 = []
  for(var i = 0; i < i4111.length; i += 1) {
    i4110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4111[i + 0]) );
  }
  i4108.objectReferenceKeys = i4110
  return i4108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4115 = data
  i4114.time = i4115[0]
  request.r(i4115[1], i4115[2], 0, i4114, 'value')
  return i4114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4119 = data
  i4118.functionName = i4119[0]
  i4118.floatParameter = i4119[1]
  i4118.intParameter = i4119[2]
  i4118.stringParameter = i4119[3]
  request.r(i4119[4], i4119[5], 0, i4118, 'objectReferenceParameter')
  i4118.time = i4119[6]
  return i4118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4121 = data
  i4120.center = new pc.Vec3( i4121[0], i4121[1], i4121[2] )
  i4120.extends = new pc.Vec3( i4121[3], i4121[4], i4121[5] )
  return i4120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4125 = data
  var i4127 = i4125[0]
  var i4126 = []
  for(var i = 0; i < i4127.length; i += 1) {
    i4126.push( i4127[i + 0] );
  }
  i4124.genericBindings = i4126
  var i4129 = i4125[1]
  var i4128 = []
  for(var i = 0; i < i4129.length; i += 1) {
    i4128.push( i4129[i + 0] );
  }
  i4124.pptrCurveMapping = i4128
  return i4124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4131 = data
  i4130.name = i4131[0]
  i4130.ascent = i4131[1]
  i4130.originalLineHeight = i4131[2]
  i4130.fontSize = i4131[3]
  var i4133 = i4131[4]
  var i4132 = []
  for(var i = 0; i < i4133.length; i += 1) {
    i4132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4133[i + 0]) );
  }
  i4130.characterInfo = i4132
  request.r(i4131[5], i4131[6], 0, i4130, 'texture')
  i4130.originalFontSize = i4131[7]
  return i4130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4137 = data
  i4136.index = i4137[0]
  i4136.advance = i4137[1]
  i4136.bearing = i4137[2]
  i4136.glyphWidth = i4137[3]
  i4136.glyphHeight = i4137[4]
  i4136.minX = i4137[5]
  i4136.maxX = i4137[6]
  i4136.minY = i4137[7]
  i4136.maxY = i4137[8]
  i4136.uvBottomLeftX = i4137[9]
  i4136.uvBottomLeftY = i4137[10]
  i4136.uvBottomRightX = i4137[11]
  i4136.uvBottomRightY = i4137[12]
  i4136.uvTopLeftX = i4137[13]
  i4136.uvTopLeftY = i4137[14]
  i4136.uvTopRightX = i4137[15]
  i4136.uvTopRightY = i4137[16]
  return i4136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4139 = data
  i4138.name = i4139[0]
  var i4141 = i4139[1]
  var i4140 = []
  for(var i = 0; i < i4141.length; i += 1) {
    i4140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4141[i + 0]) );
  }
  i4138.layers = i4140
  var i4143 = i4139[2]
  var i4142 = []
  for(var i = 0; i < i4143.length; i += 1) {
    i4142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4143[i + 0]) );
  }
  i4138.parameters = i4142
  i4138.animationClips = i4139[3]
  i4138.avatarUnsupported = i4139[4]
  return i4138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4147 = data
  i4146.name = i4147[0]
  i4146.defaultWeight = i4147[1]
  i4146.blendingMode = i4147[2]
  i4146.avatarMask = i4147[3]
  i4146.syncedLayerIndex = i4147[4]
  i4146.syncedLayerAffectsTiming = !!i4147[5]
  i4146.syncedLayers = i4147[6]
  i4146.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4147[7], i4146.stateMachine)
  return i4146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4149 = data
  i4148.id = i4149[0]
  i4148.name = i4149[1]
  i4148.path = i4149[2]
  var i4151 = i4149[3]
  var i4150 = []
  for(var i = 0; i < i4151.length; i += 1) {
    i4150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4151[i + 0]) );
  }
  i4148.states = i4150
  var i4153 = i4149[4]
  var i4152 = []
  for(var i = 0; i < i4153.length; i += 1) {
    i4152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4153[i + 0]) );
  }
  i4148.machines = i4152
  var i4155 = i4149[5]
  var i4154 = []
  for(var i = 0; i < i4155.length; i += 1) {
    i4154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4155[i + 0]) );
  }
  i4148.entryStateTransitions = i4154
  var i4157 = i4149[6]
  var i4156 = []
  for(var i = 0; i < i4157.length; i += 1) {
    i4156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4157[i + 0]) );
  }
  i4148.exitStateTransitions = i4156
  var i4159 = i4149[7]
  var i4158 = []
  for(var i = 0; i < i4159.length; i += 1) {
    i4158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4159[i + 0]) );
  }
  i4148.anyStateTransitions = i4158
  i4148.defaultStateId = i4149[8]
  return i4148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4163 = data
  i4162.id = i4163[0]
  i4162.name = i4163[1]
  i4162.cycleOffset = i4163[2]
  i4162.cycleOffsetParameter = i4163[3]
  i4162.cycleOffsetParameterActive = !!i4163[4]
  i4162.mirror = !!i4163[5]
  i4162.mirrorParameter = i4163[6]
  i4162.mirrorParameterActive = !!i4163[7]
  i4162.motionId = i4163[8]
  i4162.nameHash = i4163[9]
  i4162.fullPathHash = i4163[10]
  i4162.speed = i4163[11]
  i4162.speedParameter = i4163[12]
  i4162.speedParameterActive = !!i4163[13]
  i4162.tag = i4163[14]
  i4162.tagHash = i4163[15]
  i4162.writeDefaultValues = !!i4163[16]
  var i4165 = i4163[17]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 2) {
  request.r(i4165[i + 0], i4165[i + 1], 2, i4164, '')
  }
  i4162.behaviours = i4164
  var i4167 = i4163[18]
  var i4166 = []
  for(var i = 0; i < i4167.length; i += 1) {
    i4166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4167[i + 0]) );
  }
  i4162.transitions = i4166
  return i4162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4173 = data
  i4172.fullPath = i4173[0]
  i4172.canTransitionToSelf = !!i4173[1]
  i4172.duration = i4173[2]
  i4172.exitTime = i4173[3]
  i4172.hasExitTime = !!i4173[4]
  i4172.hasFixedDuration = !!i4173[5]
  i4172.interruptionSource = i4173[6]
  i4172.offset = i4173[7]
  i4172.orderedInterruption = !!i4173[8]
  i4172.destinationStateId = i4173[9]
  i4172.isExit = !!i4173[10]
  i4172.mute = !!i4173[11]
  i4172.solo = !!i4173[12]
  var i4175 = i4173[13]
  var i4174 = []
  for(var i = 0; i < i4175.length; i += 1) {
    i4174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4175[i + 0]) );
  }
  i4172.conditions = i4174
  return i4172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4181 = data
  i4180.destinationStateId = i4181[0]
  i4180.isExit = !!i4181[1]
  i4180.mute = !!i4181[2]
  i4180.solo = !!i4181[3]
  var i4183 = i4181[4]
  var i4182 = []
  for(var i = 0; i < i4183.length; i += 1) {
    i4182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4183[i + 0]) );
  }
  i4180.conditions = i4182
  return i4180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4187 = data
  i4186.defaultBool = !!i4187[0]
  i4186.defaultFloat = i4187[1]
  i4186.defaultInt = i4187[2]
  i4186.name = i4187[3]
  i4186.nameHash = i4187[4]
  i4186.type = i4187[5]
  return i4186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4189 = data
  i4188.name = i4189[0]
  i4188.bytes64 = i4189[1]
  i4188.data = i4189[2]
  return i4188
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4190 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4191 = data
  i4190.hashCode = i4191[0]
  request.r(i4191[1], i4191[2], 0, i4190, 'material')
  i4190.materialHashCode = i4191[3]
  request.r(i4191[4], i4191[5], 0, i4190, 'atlas')
  i4190.normalStyle = i4191[6]
  i4190.normalSpacingOffset = i4191[7]
  i4190.boldStyle = i4191[8]
  i4190.boldSpacing = i4191[9]
  i4190.italicStyle = i4191[10]
  i4190.tabSize = i4191[11]
  i4190.m_Version = i4191[12]
  i4190.m_SourceFontFileGUID = i4191[13]
  request.r(i4191[14], i4191[15], 0, i4190, 'm_SourceFontFile_EditorRef')
  request.r(i4191[16], i4191[17], 0, i4190, 'm_SourceFontFile')
  i4190.m_AtlasPopulationMode = i4191[18]
  i4190.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4191[19], i4190.m_FaceInfo)
  var i4193 = i4191[20]
  var i4192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4193.length; i += 1) {
    i4192.add(request.d('UnityEngine.TextCore.Glyph', i4193[i + 0]));
  }
  i4190.m_GlyphTable = i4192
  var i4195 = i4191[21]
  var i4194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4195.length; i += 1) {
    i4194.add(request.d('TMPro.TMP_Character', i4195[i + 0]));
  }
  i4190.m_CharacterTable = i4194
  var i4197 = i4191[22]
  var i4196 = []
  for(var i = 0; i < i4197.length; i += 2) {
  request.r(i4197[i + 0], i4197[i + 1], 2, i4196, '')
  }
  i4190.m_AtlasTextures = i4196
  i4190.m_AtlasTextureIndex = i4191[23]
  i4190.m_IsMultiAtlasTexturesEnabled = !!i4191[24]
  i4190.m_ClearDynamicDataOnBuild = !!i4191[25]
  var i4199 = i4191[26]
  var i4198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4199.length; i += 1) {
    i4198.add(request.d('UnityEngine.TextCore.GlyphRect', i4199[i + 0]));
  }
  i4190.m_UsedGlyphRects = i4198
  var i4201 = i4191[27]
  var i4200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4201.length; i += 1) {
    i4200.add(request.d('UnityEngine.TextCore.GlyphRect', i4201[i + 0]));
  }
  i4190.m_FreeGlyphRects = i4200
  i4190.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4191[28], i4190.m_fontInfo)
  i4190.m_AtlasWidth = i4191[29]
  i4190.m_AtlasHeight = i4191[30]
  i4190.m_AtlasPadding = i4191[31]
  i4190.m_AtlasRenderMode = i4191[32]
  var i4203 = i4191[33]
  var i4202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4203.length; i += 1) {
    i4202.add(request.d('TMPro.TMP_Glyph', i4203[i + 0]));
  }
  i4190.m_glyphInfoList = i4202
  i4190.m_KerningTable = request.d('TMPro.KerningTable', i4191[34], i4190.m_KerningTable)
  i4190.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4191[35], i4190.m_FontFeatureTable)
  var i4205 = i4191[36]
  var i4204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4205.length; i += 2) {
  request.r(i4205[i + 0], i4205[i + 1], 1, i4204, '')
  }
  i4190.fallbackFontAssets = i4204
  var i4207 = i4191[37]
  var i4206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4207.length; i += 2) {
  request.r(i4207[i + 0], i4207[i + 1], 1, i4206, '')
  }
  i4190.m_FallbackFontAssetTable = i4206
  i4190.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4191[38], i4190.m_CreationSettings)
  var i4209 = i4191[39]
  var i4208 = []
  for(var i = 0; i < i4209.length; i += 1) {
    i4208.push( request.d('TMPro.TMP_FontWeightPair', i4209[i + 0]) );
  }
  i4190.m_FontWeightTable = i4208
  var i4211 = i4191[40]
  var i4210 = []
  for(var i = 0; i < i4211.length; i += 1) {
    i4210.push( request.d('TMPro.TMP_FontWeightPair', i4211[i + 0]) );
  }
  i4190.fontWeights = i4210
  return i4190
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4212 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4213 = data
  i4212.m_FaceIndex = i4213[0]
  i4212.m_FamilyName = i4213[1]
  i4212.m_StyleName = i4213[2]
  i4212.m_PointSize = i4213[3]
  i4212.m_Scale = i4213[4]
  i4212.m_UnitsPerEM = i4213[5]
  i4212.m_LineHeight = i4213[6]
  i4212.m_AscentLine = i4213[7]
  i4212.m_CapLine = i4213[8]
  i4212.m_MeanLine = i4213[9]
  i4212.m_Baseline = i4213[10]
  i4212.m_DescentLine = i4213[11]
  i4212.m_SuperscriptOffset = i4213[12]
  i4212.m_SuperscriptSize = i4213[13]
  i4212.m_SubscriptOffset = i4213[14]
  i4212.m_SubscriptSize = i4213[15]
  i4212.m_UnderlineOffset = i4213[16]
  i4212.m_UnderlineThickness = i4213[17]
  i4212.m_StrikethroughOffset = i4213[18]
  i4212.m_StrikethroughThickness = i4213[19]
  i4212.m_TabWidth = i4213[20]
  return i4212
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4216 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4217 = data
  i4216.m_Index = i4217[0]
  i4216.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4217[1], i4216.m_Metrics)
  i4216.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4217[2], i4216.m_GlyphRect)
  i4216.m_Scale = i4217[3]
  i4216.m_AtlasIndex = i4217[4]
  i4216.m_ClassDefinitionType = i4217[5]
  return i4216
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4218 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4219 = data
  i4218.m_Width = i4219[0]
  i4218.m_Height = i4219[1]
  i4218.m_HorizontalBearingX = i4219[2]
  i4218.m_HorizontalBearingY = i4219[3]
  i4218.m_HorizontalAdvance = i4219[4]
  return i4218
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4220 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4221 = data
  i4220.m_X = i4221[0]
  i4220.m_Y = i4221[1]
  i4220.m_Width = i4221[2]
  i4220.m_Height = i4221[3]
  return i4220
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4224 = root || request.c( 'TMPro.TMP_Character' )
  var i4225 = data
  i4224.m_ElementType = i4225[0]
  i4224.m_Unicode = i4225[1]
  i4224.m_GlyphIndex = i4225[2]
  i4224.m_Scale = i4225[3]
  return i4224
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4230 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4231 = data
  i4230.Name = i4231[0]
  i4230.PointSize = i4231[1]
  i4230.Scale = i4231[2]
  i4230.CharacterCount = i4231[3]
  i4230.LineHeight = i4231[4]
  i4230.Baseline = i4231[5]
  i4230.Ascender = i4231[6]
  i4230.CapHeight = i4231[7]
  i4230.Descender = i4231[8]
  i4230.CenterLine = i4231[9]
  i4230.SuperscriptOffset = i4231[10]
  i4230.SubscriptOffset = i4231[11]
  i4230.SubSize = i4231[12]
  i4230.Underline = i4231[13]
  i4230.UnderlineThickness = i4231[14]
  i4230.strikethrough = i4231[15]
  i4230.strikethroughThickness = i4231[16]
  i4230.TabWidth = i4231[17]
  i4230.Padding = i4231[18]
  i4230.AtlasWidth = i4231[19]
  i4230.AtlasHeight = i4231[20]
  return i4230
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4234 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4235 = data
  i4234.id = i4235[0]
  i4234.x = i4235[1]
  i4234.y = i4235[2]
  i4234.width = i4235[3]
  i4234.height = i4235[4]
  i4234.xOffset = i4235[5]
  i4234.yOffset = i4235[6]
  i4234.xAdvance = i4235[7]
  i4234.scale = i4235[8]
  return i4234
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4236 = root || request.c( 'TMPro.KerningTable' )
  var i4237 = data
  var i4239 = i4237[0]
  var i4238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4239.length; i += 1) {
    i4238.add(request.d('TMPro.KerningPair', i4239[i + 0]));
  }
  i4236.kerningPairs = i4238
  return i4236
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4242 = root || request.c( 'TMPro.KerningPair' )
  var i4243 = data
  i4242.xOffset = i4243[0]
  i4242.m_FirstGlyph = i4243[1]
  i4242.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4243[2], i4242.m_FirstGlyphAdjustments)
  i4242.m_SecondGlyph = i4243[3]
  i4242.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4243[4], i4242.m_SecondGlyphAdjustments)
  i4242.m_IgnoreSpacingAdjustments = !!i4243[5]
  return i4242
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4244 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4245 = data
  var i4247 = i4245[0]
  var i4246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4247.length; i += 1) {
    i4246.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4247[i + 0]));
  }
  i4244.m_GlyphPairAdjustmentRecords = i4246
  return i4244
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4250 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4251 = data
  i4250.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4251[0], i4250.m_FirstAdjustmentRecord)
  i4250.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4251[1], i4250.m_SecondAdjustmentRecord)
  i4250.m_FeatureLookupFlags = i4251[2]
  return i4250
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4252 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4253 = data
  i4252.m_GlyphIndex = i4253[0]
  i4252.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4253[1], i4252.m_GlyphValueRecord)
  return i4252
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4254 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4255 = data
  i4254.m_XPlacement = i4255[0]
  i4254.m_YPlacement = i4255[1]
  i4254.m_XAdvance = i4255[2]
  i4254.m_YAdvance = i4255[3]
  return i4254
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4258 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4259 = data
  i4258.sourceFontFileName = i4259[0]
  i4258.sourceFontFileGUID = i4259[1]
  i4258.pointSizeSamplingMode = i4259[2]
  i4258.pointSize = i4259[3]
  i4258.padding = i4259[4]
  i4258.packingMode = i4259[5]
  i4258.atlasWidth = i4259[6]
  i4258.atlasHeight = i4259[7]
  i4258.characterSetSelectionMode = i4259[8]
  i4258.characterSequence = i4259[9]
  i4258.referencedFontAssetGUID = i4259[10]
  i4258.referencedTextAssetGUID = i4259[11]
  i4258.fontStyle = i4259[12]
  i4258.fontStyleModifier = i4259[13]
  i4258.renderMode = i4259[14]
  i4258.includeFontFeatures = !!i4259[15]
  return i4258
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4262 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4263 = data
  request.r(i4263[0], i4263[1], 0, i4262, 'regularTypeface')
  request.r(i4263[2], i4263[3], 0, i4262, 'italicTypeface')
  return i4262
}

Deserializers["ProductData"] = function (request, data, root) {
  var i4264 = root || request.c( 'ProductData' )
  var i4265 = data
  var i4267 = i4265[0]
  var i4266 = new (System.Collections.Generic.List$1(Bridge.ns('Product')))
  for(var i = 0; i < i4267.length; i += 1) {
    i4266.add(request.d('Product', i4267[i + 0]));
  }
  i4264.lstProduct = i4266
  var i4269 = i4265[1]
  var i4268 = new (System.Collections.Generic.List$1(Bridge.ns('ProductPetShop')))
  for(var i = 0; i < i4269.length; i += 1) {
    i4268.add(request.d('ProductPetShop', i4269[i + 0]));
  }
  i4264.lstProductPetShop = i4268
  return i4264
}

Deserializers["Product"] = function (request, data, root) {
  var i4272 = root || request.c( 'Product' )
  var i4273 = data
  i4272.typeProduct = i4273[0]
  request.r(i4273[1], i4273[2], 0, i4272, 'icon')
  i4272.productName = i4273[3]
  i4272.companyName = i4273[4]
  i4272.unitPrice = i4273[5]
  request.r(i4273[6], i4273[7], 0, i4272, 'prefab')
  request.r(i4273[8], i4273[9], 0, i4272, 'mateOutLine')
  request.r(i4273[10], i4273[11], 0, i4272, 'mateNoOutLine')
  return i4272
}

Deserializers["ProductPetShop"] = function (request, data, root) {
  var i4276 = root || request.c( 'ProductPetShop' )
  var i4277 = data
  i4276.typeProduct = i4277[0]
  request.r(i4277[1], i4277[2], 0, i4276, 'icon')
  i4276.productName = i4277[3]
  i4276.companyName = i4277[4]
  i4276.unitPrice = i4277[5]
  request.r(i4277[6], i4277[7], 0, i4276, 'prefab')
  request.r(i4277[8], i4277[9], 0, i4276, 'mateOutLine')
  request.r(i4277[10], i4277[11], 0, i4276, 'mateNoOutLine')
  return i4276
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i4278 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i4279 = data
  var i4281 = i4279[0]
  var i4280 = []
  for(var i = 0; i < i4281.length; i += 2) {
  request.r(i4281[i + 0], i4281[i + 1], 2, i4280, '')
  }
  i4278.atlasAssets = i4280
  i4278.scale = i4279[1]
  request.r(i4279[2], i4279[3], 0, i4278, 'skeletonJSON')
  i4278.isUpgradingBlendModeMaterials = !!i4279[4]
  i4278.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i4279[5], i4278.blendModeMaterials)
  var i4283 = i4279[6]
  var i4282 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i4283.length; i += 2) {
  request.r(i4283[i + 0], i4283[i + 1], 1, i4282, '')
  }
  i4278.skeletonDataModifiers = i4282
  var i4285 = i4279[7]
  var i4284 = []
  for(var i = 0; i < i4285.length; i += 1) {
    i4284.push( i4285[i + 0] );
  }
  i4278.fromAnimation = i4284
  var i4287 = i4279[8]
  var i4286 = []
  for(var i = 0; i < i4287.length; i += 1) {
    i4286.push( i4287[i + 0] );
  }
  i4278.toAnimation = i4286
  i4278.duration = i4279[9]
  i4278.defaultMix = i4279[10]
  request.r(i4279[11], i4279[12], 0, i4278, 'controller')
  return i4278
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i4290 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i4291 = data
  i4290.applyAdditiveMaterial = !!i4291[0]
  var i4293 = i4291[1]
  var i4292 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4293.length; i += 1) {
    i4292.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4293[i + 0]));
  }
  i4290.additiveMaterials = i4292
  var i4295 = i4291[2]
  var i4294 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4295.length; i += 1) {
    i4294.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4295[i + 0]));
  }
  i4290.multiplyMaterials = i4294
  var i4297 = i4291[3]
  var i4296 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i4297.length; i += 1) {
    i4296.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i4297[i + 0]));
  }
  i4290.screenMaterials = i4296
  i4290.requiresBlendModeMaterials = !!i4291[4]
  return i4290
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i4300 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i4301 = data
  i4300.pageName = i4301[0]
  request.r(i4301[1], i4301[2], 0, i4300, 'material')
  return i4300
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i4304 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i4305 = data
  request.r(i4305[0], i4305[1], 0, i4304, 'atlasFile')
  var i4307 = i4305[2]
  var i4306 = []
  for(var i = 0; i < i4307.length; i += 2) {
  request.r(i4307[i + 0], i4307[i + 1], 2, i4306, '')
  }
  i4304.materials = i4306
  return i4304
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4308 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4309 = data
  i4308.useSafeMode = !!i4309[0]
  i4308.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4309[1], i4308.safeModeOptions)
  i4308.timeScale = i4309[2]
  i4308.unscaledTimeScale = i4309[3]
  i4308.useSmoothDeltaTime = !!i4309[4]
  i4308.maxSmoothUnscaledTime = i4309[5]
  i4308.rewindCallbackMode = i4309[6]
  i4308.showUnityEditorReport = !!i4309[7]
  i4308.logBehaviour = i4309[8]
  i4308.drawGizmos = !!i4309[9]
  i4308.defaultRecyclable = !!i4309[10]
  i4308.defaultAutoPlay = i4309[11]
  i4308.defaultUpdateType = i4309[12]
  i4308.defaultTimeScaleIndependent = !!i4309[13]
  i4308.defaultEaseType = i4309[14]
  i4308.defaultEaseOvershootOrAmplitude = i4309[15]
  i4308.defaultEasePeriod = i4309[16]
  i4308.defaultAutoKill = !!i4309[17]
  i4308.defaultLoopType = i4309[18]
  i4308.debugMode = !!i4309[19]
  i4308.debugStoreTargetId = !!i4309[20]
  i4308.showPreviewPanel = !!i4309[21]
  i4308.storeSettingsLocation = i4309[22]
  i4308.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4309[23], i4308.modules)
  i4308.createASMDEF = !!i4309[24]
  i4308.showPlayingTweens = !!i4309[25]
  i4308.showPausedTweens = !!i4309[26]
  return i4308
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4310 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4311 = data
  i4310.logBehaviour = i4311[0]
  i4310.nestedTweenFailureBehaviour = i4311[1]
  return i4310
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4312 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4313 = data
  i4312.showPanel = !!i4313[0]
  i4312.audioEnabled = !!i4313[1]
  i4312.physicsEnabled = !!i4313[2]
  i4312.physics2DEnabled = !!i4313[3]
  i4312.spriteEnabled = !!i4313[4]
  i4312.uiEnabled = !!i4313[5]
  i4312.textMeshProEnabled = !!i4313[6]
  i4312.tk2DEnabled = !!i4313[7]
  i4312.deAudioEnabled = !!i4313[8]
  i4312.deUnityExtendedEnabled = !!i4313[9]
  i4312.epoOutlineEnabled = !!i4313[10]
  return i4312
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4314 = root || request.c( 'TMPro.TMP_Settings' )
  var i4315 = data
  i4314.m_enableWordWrapping = !!i4315[0]
  i4314.m_enableKerning = !!i4315[1]
  i4314.m_enableExtraPadding = !!i4315[2]
  i4314.m_enableTintAllSprites = !!i4315[3]
  i4314.m_enableParseEscapeCharacters = !!i4315[4]
  i4314.m_EnableRaycastTarget = !!i4315[5]
  i4314.m_GetFontFeaturesAtRuntime = !!i4315[6]
  i4314.m_missingGlyphCharacter = i4315[7]
  i4314.m_warningsDisabled = !!i4315[8]
  request.r(i4315[9], i4315[10], 0, i4314, 'm_defaultFontAsset')
  i4314.m_defaultFontAssetPath = i4315[11]
  i4314.m_defaultFontSize = i4315[12]
  i4314.m_defaultAutoSizeMinRatio = i4315[13]
  i4314.m_defaultAutoSizeMaxRatio = i4315[14]
  i4314.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4315[15], i4315[16] )
  i4314.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4315[17], i4315[18] )
  i4314.m_autoSizeTextContainer = !!i4315[19]
  i4314.m_IsTextObjectScaleStatic = !!i4315[20]
  var i4317 = i4315[21]
  var i4316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4317.length; i += 2) {
  request.r(i4317[i + 0], i4317[i + 1], 1, i4316, '')
  }
  i4314.m_fallbackFontAssets = i4316
  i4314.m_matchMaterialPreset = !!i4315[22]
  request.r(i4315[23], i4315[24], 0, i4314, 'm_defaultSpriteAsset')
  i4314.m_defaultSpriteAssetPath = i4315[25]
  i4314.m_enableEmojiSupport = !!i4315[26]
  i4314.m_MissingCharacterSpriteUnicode = i4315[27]
  i4314.m_defaultColorGradientPresetsPath = i4315[28]
  request.r(i4315[29], i4315[30], 0, i4314, 'm_defaultStyleSheet')
  i4314.m_StyleSheetsResourcePath = i4315[31]
  request.r(i4315[32], i4315[33], 0, i4314, 'm_leadingCharacters')
  request.r(i4315[34], i4315[35], 0, i4314, 'm_followingCharacters')
  i4314.m_UseModernHangulLineBreakingRules = !!i4315[36]
  return i4314
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4318 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4319 = data
  i4318.hashCode = i4319[0]
  request.r(i4319[1], i4319[2], 0, i4318, 'material')
  i4318.materialHashCode = i4319[3]
  request.r(i4319[4], i4319[5], 0, i4318, 'spriteSheet')
  var i4321 = i4319[6]
  var i4320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4321.length; i += 1) {
    i4320.add(request.d('TMPro.TMP_Sprite', i4321[i + 0]));
  }
  i4318.spriteInfoList = i4320
  var i4323 = i4319[7]
  var i4322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4323.length; i += 2) {
  request.r(i4323[i + 0], i4323[i + 1], 1, i4322, '')
  }
  i4318.fallbackSpriteAssets = i4322
  i4318.m_Version = i4319[8]
  i4318.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4319[9], i4318.m_FaceInfo)
  var i4325 = i4319[10]
  var i4324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4325.length; i += 1) {
    i4324.add(request.d('TMPro.TMP_SpriteCharacter', i4325[i + 0]));
  }
  i4318.m_SpriteCharacterTable = i4324
  var i4327 = i4319[11]
  var i4326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4327.length; i += 1) {
    i4326.add(request.d('TMPro.TMP_SpriteGlyph', i4327[i + 0]));
  }
  i4318.m_SpriteGlyphTable = i4326
  return i4318
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4330 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4331 = data
  i4330.name = i4331[0]
  i4330.hashCode = i4331[1]
  i4330.unicode = i4331[2]
  i4330.pivot = new pc.Vec2( i4331[3], i4331[4] )
  request.r(i4331[5], i4331[6], 0, i4330, 'sprite')
  i4330.id = i4331[7]
  i4330.x = i4331[8]
  i4330.y = i4331[9]
  i4330.width = i4331[10]
  i4330.height = i4331[11]
  i4330.xOffset = i4331[12]
  i4330.yOffset = i4331[13]
  i4330.xAdvance = i4331[14]
  i4330.scale = i4331[15]
  return i4330
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4336 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4337 = data
  i4336.m_Name = i4337[0]
  i4336.m_HashCode = i4337[1]
  i4336.m_ElementType = i4337[2]
  i4336.m_Unicode = i4337[3]
  i4336.m_GlyphIndex = i4337[4]
  i4336.m_Scale = i4337[5]
  return i4336
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4340 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4341 = data
  request.r(i4341[0], i4341[1], 0, i4340, 'sprite')
  i4340.m_Index = i4341[2]
  i4340.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4341[3], i4340.m_Metrics)
  i4340.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4341[4], i4340.m_GlyphRect)
  i4340.m_Scale = i4341[5]
  i4340.m_AtlasIndex = i4341[6]
  i4340.m_ClassDefinitionType = i4341[7]
  return i4340
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4342 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4343 = data
  var i4345 = i4343[0]
  var i4344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4345.length; i += 1) {
    i4344.add(request.d('TMPro.TMP_Style', i4345[i + 0]));
  }
  i4342.m_StyleList = i4344
  return i4342
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4348 = root || request.c( 'TMPro.TMP_Style' )
  var i4349 = data
  i4348.m_Name = i4349[0]
  i4348.m_HashCode = i4349[1]
  i4348.m_OpeningDefinition = i4349[2]
  i4348.m_ClosingDefinition = i4349[3]
  i4348.m_OpeningTagArray = i4349[4]
  i4348.m_ClosingTagArray = i4349[5]
  i4348.m_OpeningTagUnicodeArray = i4349[6]
  i4348.m_ClosingTagUnicodeArray = i4349[7]
  return i4348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4351 = data
  var i4353 = i4351[0]
  var i4352 = []
  for(var i = 0; i < i4353.length; i += 1) {
    i4352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4353[i + 0]) );
  }
  i4350.files = i4352
  i4350.componentToPrefabIds = i4351[1]
  return i4350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4357 = data
  i4356.path = i4357[0]
  request.r(i4357[1], i4357[2], 0, i4356, 'unityObject')
  return i4356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4359 = data
  var i4361 = i4359[0]
  var i4360 = []
  for(var i = 0; i < i4361.length; i += 1) {
    i4360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4361[i + 0]) );
  }
  i4358.scriptsExecutionOrder = i4360
  var i4363 = i4359[1]
  var i4362 = []
  for(var i = 0; i < i4363.length; i += 1) {
    i4362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4363[i + 0]) );
  }
  i4358.sortingLayers = i4362
  var i4365 = i4359[2]
  var i4364 = []
  for(var i = 0; i < i4365.length; i += 1) {
    i4364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4365[i + 0]) );
  }
  i4358.cullingLayers = i4364
  i4358.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4359[3], i4358.timeSettings)
  i4358.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4359[4], i4358.physicsSettings)
  i4358.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4359[5], i4358.physics2DSettings)
  i4358.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4359[6], i4358.qualitySettings)
  i4358.enableRealtimeShadows = !!i4359[7]
  i4358.enableAutoInstancing = !!i4359[8]
  i4358.enableDynamicBatching = !!i4359[9]
  i4358.lightmapEncodingQuality = i4359[10]
  i4358.desiredColorSpace = i4359[11]
  var i4367 = i4359[12]
  var i4366 = []
  for(var i = 0; i < i4367.length; i += 1) {
    i4366.push( i4367[i + 0] );
  }
  i4358.allTags = i4366
  return i4358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4371 = data
  i4370.name = i4371[0]
  i4370.value = i4371[1]
  return i4370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4375 = data
  i4374.id = i4375[0]
  i4374.name = i4375[1]
  i4374.value = i4375[2]
  return i4374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4379 = data
  i4378.id = i4379[0]
  i4378.name = i4379[1]
  return i4378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4381 = data
  i4380.fixedDeltaTime = i4381[0]
  i4380.maximumDeltaTime = i4381[1]
  i4380.timeScale = i4381[2]
  i4380.maximumParticleTimestep = i4381[3]
  return i4380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4383 = data
  i4382.gravity = new pc.Vec3( i4383[0], i4383[1], i4383[2] )
  i4382.defaultSolverIterations = i4383[3]
  i4382.bounceThreshold = i4383[4]
  i4382.autoSyncTransforms = !!i4383[5]
  i4382.autoSimulation = !!i4383[6]
  var i4385 = i4383[7]
  var i4384 = []
  for(var i = 0; i < i4385.length; i += 1) {
    i4384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4385[i + 0]) );
  }
  i4382.collisionMatrix = i4384
  return i4382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4389 = data
  i4388.enabled = !!i4389[0]
  i4388.layerId = i4389[1]
  i4388.otherLayerId = i4389[2]
  return i4388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4391 = data
  request.r(i4391[0], i4391[1], 0, i4390, 'material')
  i4390.gravity = new pc.Vec2( i4391[2], i4391[3] )
  i4390.positionIterations = i4391[4]
  i4390.velocityIterations = i4391[5]
  i4390.velocityThreshold = i4391[6]
  i4390.maxLinearCorrection = i4391[7]
  i4390.maxAngularCorrection = i4391[8]
  i4390.maxTranslationSpeed = i4391[9]
  i4390.maxRotationSpeed = i4391[10]
  i4390.baumgarteScale = i4391[11]
  i4390.baumgarteTOIScale = i4391[12]
  i4390.timeToSleep = i4391[13]
  i4390.linearSleepTolerance = i4391[14]
  i4390.angularSleepTolerance = i4391[15]
  i4390.defaultContactOffset = i4391[16]
  i4390.autoSimulation = !!i4391[17]
  i4390.queriesHitTriggers = !!i4391[18]
  i4390.queriesStartInColliders = !!i4391[19]
  i4390.callbacksOnDisable = !!i4391[20]
  i4390.reuseCollisionCallbacks = !!i4391[21]
  i4390.autoSyncTransforms = !!i4391[22]
  var i4393 = i4391[23]
  var i4392 = []
  for(var i = 0; i < i4393.length; i += 1) {
    i4392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4393[i + 0]) );
  }
  i4390.collisionMatrix = i4392
  return i4390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4397 = data
  i4396.enabled = !!i4397[0]
  i4396.layerId = i4397[1]
  i4396.otherLayerId = i4397[2]
  return i4396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4399 = data
  var i4401 = i4399[0]
  var i4400 = []
  for(var i = 0; i < i4401.length; i += 1) {
    i4400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4401[i + 0]) );
  }
  i4398.qualityLevels = i4400
  var i4403 = i4399[1]
  var i4402 = []
  for(var i = 0; i < i4403.length; i += 1) {
    i4402.push( i4403[i + 0] );
  }
  i4398.names = i4402
  i4398.shadows = i4399[2]
  i4398.anisotropicFiltering = i4399[3]
  i4398.antiAliasing = i4399[4]
  i4398.lodBias = i4399[5]
  i4398.shadowCascades = i4399[6]
  i4398.shadowDistance = i4399[7]
  i4398.shadowmaskMode = i4399[8]
  i4398.shadowProjection = i4399[9]
  i4398.shadowResolution = i4399[10]
  i4398.softParticles = !!i4399[11]
  i4398.softVegetation = !!i4399[12]
  i4398.activeColorSpace = i4399[13]
  i4398.desiredColorSpace = i4399[14]
  i4398.masterTextureLimit = i4399[15]
  i4398.maxQueuedFrames = i4399[16]
  i4398.particleRaycastBudget = i4399[17]
  i4398.pixelLightCount = i4399[18]
  i4398.realtimeReflectionProbes = !!i4399[19]
  i4398.shadowCascade2Split = i4399[20]
  i4398.shadowCascade4Split = new pc.Vec3( i4399[21], i4399[22], i4399[23] )
  i4398.streamingMipmapsActive = !!i4399[24]
  i4398.vSyncCount = i4399[25]
  i4398.asyncUploadBufferSize = i4399[26]
  i4398.asyncUploadTimeSlice = i4399[27]
  i4398.billboardsFaceCameraPosition = !!i4399[28]
  i4398.shadowNearPlaneOffset = i4399[29]
  i4398.streamingMipmapsMemoryBudget = i4399[30]
  i4398.maximumLODLevel = i4399[31]
  i4398.streamingMipmapsAddAllCameras = !!i4399[32]
  i4398.streamingMipmapsMaxLevelReduction = i4399[33]
  i4398.streamingMipmapsRenderersPerFrame = i4399[34]
  i4398.resolutionScalingFixedDPIFactor = i4399[35]
  i4398.streamingMipmapsMaxFileIORequests = i4399[36]
  i4398.currentQualityLevel = i4399[37]
  return i4398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4409 = data
  i4408.weight = i4409[0]
  i4408.vertices = i4409[1]
  i4408.normals = i4409[2]
  i4408.tangents = i4409[3]
  return i4408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4413 = data
  i4412.mode = i4413[0]
  i4412.parameter = i4413[1]
  i4412.threshold = i4413[2]
  return i4412
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4414 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4415 = data
  i4414.xPlacement = i4415[0]
  i4414.yPlacement = i4415[1]
  i4414.xAdvance = i4415[2]
  i4414.yAdvance = i4415[3]
  return i4414
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

Deserializers.creativeName = "PLY05_HieuNX_Luna";

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

Deserializers.buildID = "d8b32cbc-b711-458a-92eb-3902a9fbdf79";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


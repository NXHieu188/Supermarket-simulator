using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GlobalInstance : Singleton<GlobalInstance>
{
    public GameManager2 gameManagerInstance = GameManager2.Instance;
}
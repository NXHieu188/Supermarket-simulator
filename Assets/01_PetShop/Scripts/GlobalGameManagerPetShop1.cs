using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GlobalGameManagerPetShop1 : Singleton<GlobalGameManagerPetShop1>
{
    public GameManagerPetShop3 gameManagerInstance = GameManagerPetShop3.Instance;
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Animal : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {

    }

    public void Said()
    {
        if (!GlobalGameManagerPetShop1.Instance.gameManagerInstance.isDoneCat && GlobalGameManagerPetShop1.Instance.gameManagerInstance.mission != MisisonGamePlay5.SetUpShelf)
        {
            AudioManager.Instance.PlaySoundClipMeo();
        }
    }
}

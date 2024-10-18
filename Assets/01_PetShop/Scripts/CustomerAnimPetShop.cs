using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CustomerAnimPetShop : MonoBehaviour
{
    public GameObject methodPay;
    public Collider col;
    public void GiveMoney()
    {
        col.enabled = true;
        if (!GlobalGameManagerPetShop1.Instance.gameManagerInstance.availableThirtyGuide)
        {
            GlobalGameManagerPetShop1.Instance.gameManagerInstance.hanGuideClick3.SetActive(true);
            GlobalGameManagerPetShop1.Instance.gameManagerInstance.availableThirtyGuide = true;
        }
    }
}

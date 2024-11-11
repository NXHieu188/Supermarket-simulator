using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CusomterAnim : MonoBehaviour
{
    public GameObject methodPay;
    public Collider col;
    public void GiveMoney()
    {
        col.enabled = true;
        if (!GlobalInstance.Instance.gameManagerInstance.availableThirtyGuide)
        {
            GlobalInstance.Instance.gameManagerInstance.hanGuideClick3.SetActive(true);
            GlobalInstance.Instance.gameManagerInstance.availableThirtyGuide = true;
        }
    }

}

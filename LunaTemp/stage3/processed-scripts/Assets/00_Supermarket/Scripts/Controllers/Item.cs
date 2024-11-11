using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Item : MonoBehaviour
{
    public bool isObjTwo;
    public float price;
    [HideInInspector] public bool isDone = false;
    public void Action()
    {
        if (!isDone)
        {
            isDone = true;
            GlobalInstance.Instance.gameManagerInstance.audioManager.PlaySoundClipScan();
            GlobalInstance.Instance.gameManagerInstance.UpdatePrice(price);
            GlobalInstance.Instance.gameManagerInstance.UpdateCustomer();
            transform.DOMoveZ(transform.position.z + 1.3f, 0.3f).SetEase(Ease.Linear).OnComplete(() =>
            {
                gameObject.SetActive(false);
            });
            GlobalInstance.Instance.gameManagerInstance.ActionGuide(false);
            if (GlobalInstance.Instance.gameManagerInstance.availableSecondGuide)
            {
                GlobalInstance.Instance.gameManagerInstance.hanGuideClick2.SetActive(false);
            }
            if (!GlobalInstance.Instance.gameManagerInstance.availableSecondGuide)
            {
                if (!isObjTwo)
                {
                    GlobalInstance.Instance.gameManagerInstance.hanGuideClick2.SetActive(true);
                }
                GlobalInstance.Instance.gameManagerInstance.availableSecondGuide = true;
            }

        }
    }
}

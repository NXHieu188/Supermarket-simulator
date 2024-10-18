using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ItemPetShop : MonoBehaviour
{
    public bool isObjTwo;
    public float price;
    [HideInInspector] public bool isDone = false;
    public void Action()
    {
        if (!isDone)
        {
            isDone = true;
            GlobalGameManagerPetShop1.Instance.gameManagerInstance.audioManager.PlaySoundClipScan();
            GlobalGameManagerPetShop1.Instance.gameManagerInstance.UpdatePrice(price);
            GlobalGameManagerPetShop1.Instance.gameManagerInstance.UpdateCustomer();
            //transform.DOMoveZ(transform.position.z + 1.3f, 0.3f).SetEase(Ease.Linear).OnComplete(() =>
            //{
            //    gameObject.SetActive(false);
            //});
            transform.DOMove(new Vector3(transform.position.x + 0.4f, transform.position.y, transform.position.z + 1.7f), 0.3f).SetEase(Ease.Linear).OnComplete(() =>
            {
                gameObject.SetActive(false);
            });
            GlobalGameManagerPetShop1.Instance.gameManagerInstance.ActionGuide(false);
            if (GlobalGameManagerPetShop1.Instance.gameManagerInstance.availableSecondGuide)
            {
                GlobalGameManagerPetShop1.Instance.gameManagerInstance.hanGuideClick2.SetActive(false);
            }
            if (!GlobalGameManagerPetShop1.Instance.gameManagerInstance.availableSecondGuide)
            {
                if (!isObjTwo)
                {
                    GlobalGameManagerPetShop1.Instance.gameManagerInstance.hanGuideClick2.SetActive(true);
                }
                GlobalGameManagerPetShop1.Instance.gameManagerInstance.availableSecondGuide = true;
            }

        }
    }
}

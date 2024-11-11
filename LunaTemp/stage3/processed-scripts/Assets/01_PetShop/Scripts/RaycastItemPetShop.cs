using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RaycastItemPetShop : MonoBehaviour
{
    public bool isCanPlay = false;
    private Ray ray;
    private RaycastHit hit;
    private Item item;
    private void Update()
    {
        if (!GlobalGameManagerPetShop1.Instance.gameManagerInstance.isEndGame)
        {
            if (isCanPlay)
            {
                if (Input.GetMouseButtonDown(0))
                {
                    ray = Camera.main.ScreenPointToRay(Input.mousePosition);
                    if (Physics.Raycast(ray, out hit, Mathf.Infinity, 1 << 6))
                    {
                        Transform select = hit.transform;
                        if (select != null)
                        {
                            select.GetComponent<ItemPetShop>().Action();
                        }
                    }
                    if (Physics.Raycast(ray, out hit, Mathf.Infinity, 1 << 7))
                    {
                        Transform select = hit.transform;
                        if (select != null)
                        {
                            select.GetComponent<CardAndMoneyPetShop>().ShowCheckOutUI();
                        }
                    }
                }
            }
        }
        else
        {
            if (Input.GetMouseButtonDown(0))
            {
                GlobalGameManagerPetShop1.Instance.gameManagerInstance.InstallFullGame();
            }
        }
    }
}

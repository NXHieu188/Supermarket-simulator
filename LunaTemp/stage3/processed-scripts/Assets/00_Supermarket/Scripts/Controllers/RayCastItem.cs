using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RayCastItem : MonoBehaviour
{
    public bool isCanPlay = false;
    private Ray ray;
    private RaycastHit hit;
    private Item item;
    private void Update()
    {
        if (!GlobalInstance.Instance.gameManagerInstance.isEndGame)
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
                            select.GetComponent<Item>().Action();
                        }
                    }
                    if (Physics.Raycast(ray, out hit, Mathf.Infinity, 1 << 7))
                    {
                        Transform select = hit.transform;
                        if (select != null)
                        {
                            select.GetComponent<CardAndMoney>().ShowCheckOutUI();
                        }
                    }
                }
            }
        }
        else
        {
            if (Input.GetMouseButtonDown(0))
            {
                GlobalInstance.Instance.gameManagerInstance.InstallFullGame();
            }
        }
    }
}

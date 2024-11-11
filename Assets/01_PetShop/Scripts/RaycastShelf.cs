using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RaycastShelf : MonoBehaviour
{
    public GameObject guide;
    private Ray ray;
    private RaycastHit hit;
    private bool isTouch;
    private void Update()
    {
        if (!GlobalGameManagerPetShop1.Instance.gameManagerInstance.isEndGame)
        {
            if (GlobalGameManagerPetShop1.Instance.gameManagerInstance.mission == MisisonGamePlay5.SetUpShelf)
            {
                if (Input.GetMouseButtonDown(0))
                {
                    guide.SetActive(false);
                    isTouch = true;
                }
                if (Input.GetMouseButton(0))
                {
                    if (isTouch)
                    {
                        ray = Camera.main.ScreenPointToRay(Input.mousePosition);
                        if (Physics.Raycast(ray, out hit, Mathf.Infinity, 1 << 8))
                        {
                            Transform select = hit.transform;
                            if (select != null)
                            {
                                select.GetComponent<ShelfGuide>().Action();
                            }
                        }
                    }
                }
                if (Input.GetMouseButtonUp(0))
                {
                    isTouch = false;
                }
            }
        }
    }
}

using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ResponsiveUI : MonoBehaviour
{
    private float oldScreenWidth = 0, oldScreenHeight = 0;
    private bool isConvertScreen = false;
    public Transform left, right;
    private Vector2 posLeft, posRight;

    public CanvasScaler canvasScaler;
    public GameObject virtualCamHor;
    public GameObject virtualCamVert;
    public RectTransform guideClickItem;
    public GameObject btnDownVer;
    public GameObject btnDownHor;
    public Transform bg;
    private void Start()
    {
        posLeft = new Vector2(left.transform.position.x + (Mathf.Abs(left.transform.position.x / 2)), 0);
        posRight = new Vector2(right.transform.position.x - (Mathf.Abs(left.transform.position.x / 2)), 0);
        //Debug.Log(left.transform.position.x);
    }

    void Update()
    {
        if ((Screen.width != oldScreenWidth || Screen.height != oldScreenHeight) && !isConvertScreen)
        {
            oldScreenWidth = Screen.width;
            oldScreenHeight = Screen.height;
            isConvertScreen = true;
            Invoke(nameof(DelayConvertScreen), 0.1f);
        }
    }

    private void DelayConvertScreen()
    {
        if (Screen.width * 1.0f / Screen.height > 1.5f && isConvertScreen)
        {
            //posLeft = new Vector2(left.transform.position.x + (Mathf.Abs(left.transform.position.x / 1.7f)), 0);
            //posRight = new Vector2(right.transform.position.x - (Mathf.Abs(left.transform.position.x / 1.7f)), 0);
            //isConvertScreen = false;
            //ui.SetActive(true);
            //ui.transform.position = posLeft;
            //gameplay.transform.position = new Vector3(posRight.x, posRight.y, 0);

            //Horizontal
            virtualCamHor.SetActive(true);
            virtualCamVert.SetActive(false);
            bg.transform.position = new Vector3(4f, -6.1f, -11f);
            canvasScaler.referenceResolution = new Vector2(640, 960);
            isConvertScreen = false;


            //clickItemHor.SetActive(true);
            //clickItemVert.SetActive(false);
            guideClickItem.anchoredPosition = new Vector3(0,-134f,0);

            btnDownHor.SetActive(true);
            btnDownVer.SetActive(false);
            GlobalInstance.Instance.gameManagerInstance.UpdateCustomerSize(true);
        }

        if (Screen.width * 1.0f / Screen.height <= 1.5f && isConvertScreen)
        {
            //posLeft = new Vector2(left.transform.position.x + (Mathf.Abs(left.transform.position.x / 1.7f)), 0);
            //posRight = new Vector2(right.transform.position.x - (Mathf.Abs(left.transform.position.x / 1.7f)), 0);
            //isConvertScreen = false;
            //ui.SetActive(false);
            //gameplay.transform.position = Vector3.zero;

            //Vertical
            virtualCamHor.SetActive(false);
            virtualCamVert.SetActive(true);
            bg.transform.position = new Vector3(-3f, -1.2f, 0f);
            canvasScaler.referenceResolution = new Vector2(1080, 1920);
            isConvertScreen = false;


            //clickItemHor.SetActive(false);
            //clickItemVert.SetActive(true);
            guideClickItem.anchoredPosition = new Vector3(0, -851f, 0);

            btnDownHor.SetActive(false);
            btnDownVer.SetActive(true);
            GlobalInstance.Instance.gameManagerInstance.UpdateCustomerSize(false);
        }
    }
}
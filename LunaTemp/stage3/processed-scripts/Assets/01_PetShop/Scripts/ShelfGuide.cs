using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShelfGuide : MonoBehaviour
{
    public Vector3 scale;
    public BoxCollider boxColider;
    public GameObject shelf;
    public GameObject price;
    public GameObject tu;
    [HideInInspector] public bool isDone;
    private void Start()
    {
        boxColider = GetComponent<BoxCollider>();
    }
    public void Action()
    {
        AudioManager.Instance.PlaySoundClipPlace();
        shelf.SetActive(true); 
        boxColider.enabled = false;
        tu.SetActive(false);
        price.SetActive(false);
        shelf.transform.DOScale(new Vector3(scale.x, scale.y, scale.z), 0.7f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            gameObject.SetActive(false);
            isDone = true;
            GlobalGameManagerPetShop1.Instance.gameManagerInstance.DoMissionSetUpShelf();
        });
    }
}

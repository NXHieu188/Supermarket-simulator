using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Customer : MonoBehaviour
{
    public TypeCheckOut typeCheckOut;
    public CusomterAnim cusAnim;
    public Animator animator;
    public Transform checkOutPos;
    public Transform endPos;
    public int curItemBuy;
    public int totalItemBuy = 0;
    public float change = 15.50f;
    public void PlayAnimWalk()
    {
        animator.SetBool("Walk", true);
    }
    public void PlayAnimIdle()
    {
        animator.SetBool("Walk", false);
    }
    public void CheckOut()
    {
        transform.DOMove(checkOutPos.position, 1.1f).SetEase(Ease.Linear).OnComplete(() =>
        {
            transform.DORotateQuaternion(Quaternion.Euler(9.22f, -52.251f, 0), 0.2f).SetEase(Ease.Linear).OnComplete(() =>
            {
                PlayAnimIdle();
                FillItem();
            });
            //transform.eulerAngles = new Vector3(9.22f, -52.251f, 0);
            //PlayAnimIdle();
        });
    }
    public void Pay()
    {
        cusAnim.methodPay.SetActive(true);
        animator.SetBool("Pay", true);
    }
    public void End()
    {
        cusAnim.methodPay.SetActive(false);
        animator.SetBool("Pay", false);
        StartCoroutine(IEDelayMoveEnd());

    }
    IEnumerator IEDelayMoveEnd()
    {
        yield return new WaitForSeconds(0.6f);
        PlayAnimWalk();
        transform.DORotateQuaternion(Quaternion.Euler(9.22f, 20.68f, 0), 0.2f).SetEase(Ease.Linear);
        transform.DOMove(endPos.position, 2.5f).SetEase(Ease.Linear).SetDelay(0.2f).OnComplete(() =>
        {
            gameObject.SetActive(false);
        });
        yield return new WaitForSeconds(0.7f);
        GlobalInstance.Instance.gameManagerInstance.UpdateTurnCheckOut();
    }
    public void FillItem()
    {
        GlobalInstance.Instance.gameManagerInstance.ActionCustomer();
    }
}

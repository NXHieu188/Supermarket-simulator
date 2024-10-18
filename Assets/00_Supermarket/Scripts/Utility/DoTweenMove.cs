using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
public class DoTweenMove : MonoBehaviour
{
    [SerializeField] private Vector3 targetPos;
    [SerializeField] private float duration;
    [SerializeField] private bool setLoop;
    [SerializeField] private bool doLocal;
    private Vector3 startPos;
    private Vector3 posMove;
    private int flag = 1;
    private void Start()
    {
        startPos = transform.localPosition;
        posMove = targetPos;
        DoMove();
    }
    void DoMove()
    {
        if (setLoop && doLocal)
        {
            Sequence q = DOTween.Sequence();
            q.Append(transform.DOLocalMove(targetPos, duration))
            .Append(transform.DOLocalMove(startPos, duration));
            q.SetLoops(-1);
        }
        else if (setLoop && !doLocal)
        {
            Sequence q = DOTween.Sequence();
            q.Append(transform.DOMove(targetPos, duration).SetEase(Ease.Linear))
            .Append(transform.DOMove(startPos, duration).SetEase(Ease.Linear));
            q.SetLoops(-1);
        }
    }
    // void DoMove()
    // {
    //     if (flag == 1)
    //     {
    //         posMove = targetPos;
    //         flag = 0;
    //     }
    //     else
    //     {
    //         posMove = startPos;
    //         flag = 1;
    //     }
    //     transform.DOMoveX(posMove.x, duration).SetEase(Ease.Linear).OnComplete(() =>
    //      {
    //          transform.localScale = new Vector2(transform.localScale.x * -1, transform.localScale.y);
    //          DoMove();
    //      });
    // }
}

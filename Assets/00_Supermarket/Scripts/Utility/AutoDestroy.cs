using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public enum TypeDestroy
{
    DISABLE,
    RESPAWNER,
    DESTROY,
}
public class AutoDestroy : MonoBehaviour
{
    [SerializeField]
    public float timeOut = 0.5f;
    public TypeDestroy typeDestroy = TypeDestroy.DISABLE;

    float timeStart;

    private void OnEnable()
    {
        timeStart = Time.time;
    }
    // Update is called once per frame
    void Update()
    {
        if (Time.time - timeStart > timeOut)
            OnDestroy();
    }
    public void OnDestroy()
    {
        if (typeDestroy == TypeDestroy.DISABLE)
            gameObject.SetActive(false);
        else if (typeDestroy == TypeDestroy.RESPAWNER)
            SimplePool.Despawn(gameObject);
        else if (typeDestroy == TypeDestroy.DESTROY)
            Destroy(gameObject);
    }
    private void OnDisable()
    {
        OnDestroy();
    }
}

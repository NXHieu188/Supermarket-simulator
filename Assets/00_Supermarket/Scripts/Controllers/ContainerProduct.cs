using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ContainerProduct : MonoBehaviour
{
    public List<ElementProduct> lstProduct = new List<ElementProduct>();
    public ProductData productData;
    private void Start()
    {
        for (int i = 0; i < lstProduct.Count; i++)
        {
            Product product = productData.GetProduct(lstProduct[i].typeProduct);
            lstProduct[i].Init(product);
        }
    }
}

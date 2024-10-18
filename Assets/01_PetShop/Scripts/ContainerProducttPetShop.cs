using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ContainerProducttPetShop : MonoBehaviour
{
    public List<ElementProductPetShop> lstProduct = new List<ElementProductPetShop>();
    public ProductData productData;
    private void Start()
    {
        for (int i = 0; i < lstProduct.Count; i++)
        {
            ProductPetShop product = productData.GetProductPetShop(lstProduct[i].typeProduct);
            lstProduct[i].Init(product);
        }
    }
}

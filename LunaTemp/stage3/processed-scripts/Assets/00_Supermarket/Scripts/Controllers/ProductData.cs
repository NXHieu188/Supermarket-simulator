using System.Collections;
using System.Collections.Generic;
using UnityEngine;
[CreateAssetMenu(fileName = "ProductData", menuName = "Data/ProductData")]
public class ProductData : ScriptableObject
{
    public List<Product> lstProduct = new List<Product>();
    public List<ProductPetShop> lstProductPetShop = new List<ProductPetShop>();
    public Product GetProduct(TypeProduct typeProduct)
    {
        for (int i = 0; i < lstProduct.Count; i++)
        {
            if (lstProduct[i].typeProduct == typeProduct)
                return lstProduct[i];
        }
        return null;
    }
    public ProductPetShop GetProductPetShop(TypeProductPetShop typeProduct)
    {
        for (int i = 0; i < lstProductPetShop.Count; i++)
        {
            if (lstProductPetShop[i].typeProduct == typeProduct)
                return lstProductPetShop[i];
        }
        return null;
    }
}

[System.Serializable]
public class Product
{
    public TypeProduct typeProduct;
    public Sprite icon;
    public string productName;
    public string companyName;
    public float unitPrice;
    public GameObject prefab;
    public Material mateOutLine;
    public Material mateNoOutLine;
}
[System.Serializable]
public class ProductPetShop
{
    public TypeProductPetShop typeProduct;
    public Sprite icon;
    public string productName;
    public string companyName;
    public float unitPrice;
    public GameObject prefab;
    public Material mateOutLine;
    public Material mateNoOutLine;
}

terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "dvopsResourceGroup" {
  name     = "dvopsResourceGroup"
  location = "East US"
}

resource "azurerm_kubernetes_cluster" "dvopsAKSCluster" {
  name                = "dvopsAKSCluster"
  location            = azurerm_resource_group.dvopsResourceGroup.location
  resource_group_name = azurerm_resource_group.dvopsResourceGroup.name
  dns_prefix          = "rms-aks"

  default_node_pool {
    name       = "default"
    node_count = 1
    vm_size    = "Standard_DS2_v2"
  }

  service_principal {
    client_id     = "7baaac95-b4d9-4e67-91e4-cfca8b5fca3d"
    client_secret = "qDy8Q~.O68xn~50c4hE2svoCWx~mRyPghcNS2a0d"
  }
}

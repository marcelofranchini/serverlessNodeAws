# stefanini_teste

## Serverless
-  NodeJs
-  Lambda
-  Api Gateway
-  Sc3
-  Serverless Application Mode
-  DynamoDb(nosql)
## Url Da APi Getway AWS - Utilizar o Postaman ou Insomnia
 - https://r5i4vc51rc.execute-api.us-east-1.amazonaws.com/Prod/employee


## Buscar um funcionário 
- Utlizar o Método Get
 https://r5i4vc51rc.execute-api.us-east-1.amazonaws.com/Prod/employee/id
 
 - exemplos para teste(funcionando no navegador):https://r5i4vc51rc.execute-api.us-east-1.amazonaws.com/Prod/employee/514d2a38-e30b-4ff7-8926-b61370f0a421
 - ids para teste:  
  1. d727e857-e69b-468c-990b-18dad9186fc2, 
  2. f01349b9-f644-4839-b59b-b9f9a0a35feb, 
  3. f43dba5b-07c2-4ff6-8c62-20fed45c4146, 
  4. f9329049-01e2-4f65-ba38-9229eed543e5

## Criar um funcionário 
- Utlizar o Método Post 
- https://r5i4vc51rc.execute-api.us-east-1.amazonaws.com/Prod/employee

- Body - JSON
{
	"name": "marcelo",
	"position": "Dev",
	"age": 33
}

- id gerado automátio uuid

## Deletar um funcionário 
- Utlizar o Método Delete

- Passar o id via parâmetro na url: https://r5i4vc51rc.execute-api.us-east-1.amazonaws.com/Prod/employee/{id}
 

## Editar um funcionário 
- Utlizar o Método Put

- Passar o id via parâmetro na url, e o body com as atualizações: https://r5i4vc51rc.execute-api.us-east-1.amazonaws.com/Prod/employee/{id}

- Body - JSON
{
	"name": "marcelo",
	"position": "Dev",
	"age": 33
}




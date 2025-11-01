// src/aws-config.js
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

// --- Tus datos de AWS ---
const REGION = "us-east-2";
const IDENTITY_POOL_ID = "us-east-2:35c96610-8896-4564-a30a-4767c1dbf209";
// -------------------------

// Configura el proveedor de credenciales de Cognito
const credentials = fromCognitoIdentityPool({
  clientConfig: { region: REGION },
  identityPoolId: IDENTITY_POOL_ID,
});

// Exporta un cliente de DynamoDB ya configurado
export const dbClient = new DynamoDBClient({
  region: REGION,
  credentials,
});
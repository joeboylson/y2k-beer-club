import { init, id } from "@instantdb/react";

export type IDBError = {
  status: string;
  clientId: string;
  message: string;
  hint: {
    "record-type": string;
    "attr-id": string;
    value: any;
  };
};

const REACT_APP_INSTANTDB_ID = process.env.REACT_APP_INSTANTDB_ID ?? "";

export const db = init({ appId: REACT_APP_INSTANTDB_ID, devtool: false });

export async function createNewUser(email: string, phone?: string) {
  const createdAt = new Date();
  return await db.transact(
    db.tx.signups[id()].update({ email, phone, createdAt })
  );
}

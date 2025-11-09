"use server";

import { PresenteType } from "@/types/presente";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase";

interface ResponseType<T> {
  success: boolean;
  data?: T;
  total?: number;
  erro?: unknown;
}

export const listarPresentes = async (): Promise<
  ResponseType<PresenteType[] | string>
> => {
  try {
    const presentesRef = collection(db, "presentes");
    const presentesSnapshot = await getDocs(presentesRef);
    const presentes: PresenteType[] = [];

    presentesSnapshot.forEach((doc) => {
      presentes.push({
        id: doc.id,
        ...doc.data(),
      } as PresenteType);
    });

    return {
      success: true,
      data: presentes,
      total: presentes.length,
    };
  } catch (error) {
    console.error("Erro ao buscar presentes:", error);
    return {
      success: false,
      erro: "Erro interno do servidor ao buscar presentes",
    };
  }
};

export const encontrarPresente = async (
  presenteID: string
): Promise<ResponseType<PresenteType | string>> => {
  try {
    const presenteRef = doc(db, "presentes", presenteID);
    const presenteDoc = await getDoc(presenteRef);

    if (!presenteDoc.exists) {
      return {
        success: false,
        erro: "Presente não encontrado",
      };
    }

    const presenteData = {
      id: presenteDoc.id,
      ...presenteDoc.data(),
    } as PresenteType;

    return {
      success: true,
      data: presenteData,
    };
  } catch (error) {
    console.error("Erro ao buscar presente por ID:", error);
    return {
      success: false,
      erro: "Erro interno do servidor ao buscar presente",
    };
  }
};

export const cadastrarPresente = async (form: Omit<PresenteType, "id">) => {
  try {
    const presentesCollectionRef = collection(db, "presentes");

    const presenteRef = await addDoc(presentesCollectionRef, form);

    await updateDoc(presenteRef, { id: presenteRef.id });
    return {
      success: true,
      message: "Presente cadastrado com sucesso",
      data: presenteRef.id,
    };
  } catch (error) {
    console.error("Erro ao cadastrar presente:", error);
    return {
      success: false,
      error: "Erro interno do servidor ao cadastrar presente",
    };
  }
};

export const editarPresente = async (params: {
  presente?: PresenteType;
  presenteID: string;
}) => {
  const { presente, presenteID } = params;

  try {
    const presenteDocRef = doc(db, "presentes", presenteID);

    await updateDoc(presenteDocRef, { ...presente }); // O 'presente' aqui deve conter os campos a serem atualizados

    return {
      success: true,
      message: "Presente atualizado com sucesso",
    };
  } catch (error) {
    console.error("Erro ao atualizar presente:", error);
    return {
      success: false,
      error: "Erro interno do servidor ao atualizar presente",
    };
  }
};

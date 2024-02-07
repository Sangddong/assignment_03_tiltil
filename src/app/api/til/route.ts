"use client"
import axios from "axios";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { tilInDetail } from "./route.response";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { title, content } = data;

  const response = await fetch(
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til",
    {
      method: "POST",
      body: JSON.stringify({
        id: nanoid(),
        title,
        content,
        author: {
          name: "박상희",
        },
      }),
    }
  );
  const til = await response.json();

  return NextResponse.json(til);
}

export type tilListData = {
  id:string;
  title:string;
  content:string;
  author: {name:string}
}

const tilClient = axios.create({
  baseURL: "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til",
  headers: {
    Accept: "application/json",
  },
});

const getTil = async (id: string) => {
  const endpoint = `/${id}`;
  const response = await tilClient.get<tilInDetail>(endpoint);
  const data = response.data;
console.log(data);
  return data;
};

const tilAPI = {
  getTil
};

export default tilAPI;
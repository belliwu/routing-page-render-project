import { NextResponse } from "next/server";

export default function Middleware(request) {
  console.log("Middleware executed for request:", request.url);
  return NextResponse.next();
}

export function GET(request) {
  console.log(request);

  // return Response.json();
  return new Response("Hello, Belliwu!");
}

// export function POST(request) {}

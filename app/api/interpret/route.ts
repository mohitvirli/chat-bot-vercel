
import { NextResponse } from "next/server";
import { PythonShell } from "python-shell";

let pyshell: PythonShell;

/**
 * TODO:
 * @param req
 * @returns
 */
export async function POST(req: any) {
  const { message } = await req.json();
  if (!pyshell) {
    pyshell = new PythonShell('script.py', {
      args: [message]
    });
  } else {
    pyshell.send(message);
  }
  const p = await new Promise((res, rej) => {
    let result: any = {}, messages = [];
    pyshell.on('message', async function (m) {
      const message = JSON.parse(m);
      messages.push(message)
      console.log(message)
      if (message.end) {
        pyshell.end(function (err,code,signal) {
          if (err) throw err;
        });
        res(messages);
      }
    });
  });

  return NextResponse.json({ a: p });
}
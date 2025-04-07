
import {client} from "@repo/db/client"



export default async function Home() {
  const todos = await client.todos.findMany({where:{userId:2}})
  return (
    <div>
      {JSON.stringify(todos)}
    </div>

  );
}

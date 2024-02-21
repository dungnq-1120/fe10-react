import { zodResolver } from "@hookform/resolvers/zod";
import "./App.css";

import { useForm } from "react-hook-form";

import { z } from "zod";

const schema = z.object({
  input1: z.string().min(10, "dbawhdawudbawud"),
  input2: z.string(),
  input3: z.string(),
  input4: z.string(),
});

type TForm = {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
};

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TForm>({
    defaultValues: {
      input1: "1",
      input2: "2",
      input3: "3",
      input4: "4",
    },
    resolver: zodResolver(schema),
  });

  console.log(errors);

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className="border m-2" {...register("input1")} />
        <span>{errors.input1?.message}</span>
        <input type="text" className="border m-2" {...register("input2")} />
        <input type="text" className="border m-2" {...register("input3")} />
        <input type="text" className="border m-2" {...register("input4")} />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;

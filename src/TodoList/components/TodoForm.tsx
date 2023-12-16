import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  title: z.string().min(3, { message: "The title field is required!" }),
  memo: z.string(),
  important: z.boolean(),
});

type TodoFormData = z.infer<typeof schema>;

interface Props {
  dark: boolean;
  onSubmit: (data: TodoFormData) => void;
}

const TodoForm = ({ dark, onSubmit }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormData>({ resolver: zodResolver(schema) });

  return (
    <div className="max-w-5xl mx-auto">
      <h2
        className={`font-bold my-2 ${
          dark ? "text-stone-100" : "text-stone-800"
        } xs:text-md sm:text-lg md:text-xl md:my-4 lg:text-2xl xl:text-3xl`}
      >
        Add your Todos
      </h2>

      <form
        className={`flex flex-col space-y-2 bg-stone-200 px-4 py-2 rounded-md shadow-md md:py-3`}
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="flex flex-col space-y-1">
          <label
            className="text-stone-900 xs:text-md md:text-lg xl:text-xl"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="bg-stone-100 rounded-sm px-3 py-1"
            {...register("title")}
            type="text"
            id="title"
          />
          {errors.title && (
            <p className="text-red-500 xs:text-md md:text-lg xl:text-xl">
              {errors.title.message}
            </p>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label
            className="text-stone-900 xs:text-md md:text-lg xl:text-xl"
            htmlFor="memo"
          >
            Memo
          </label>
          <textarea
            className="bg-stone-100 rounded-sm px-3 py-1 overflow-hidden"
            {...register("memo")}
            id="memo"
          ></textarea>
          {errors.memo && (
            <p className="text-red-500 xs:text-md md:text-lg xl:text-xl">
              {errors.memo.message}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-1">
          <label htmlFor="important">Important</label>
          <input {...register("important")} type="checkbox" id="important" />
          {errors.important && (
            <p className="text-red-500 xs:text-md md:text-lg xl:text-xl">
              {errors.important.message}
            </p>
          )}
        </div>

        <button
          className="border-2 border-stone-900 text-stone-900 px-4 py-2 rounded-md shadow-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

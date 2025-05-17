import Image from "next/image";
import type { Achievement } from "@/lib/generated/prisma";
import { DeleteButton, EditButton } from "../../button/button";

const CardBody = ({ data }: { data: Achievement }) => {
  return (
    <>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="px-4 py-3">
            <Image
              src={data.image}
              alt={data.title}
              width={80}
              height={50}
              className="rounded-md object-cover w-50 h-30"
            />
          </td>
          <td className="px-4 py-3 text-sm font-medium w-60 text-gray-800 ">
            {data.title}
          </td>
          <td className="px-4 py-3 text-sm w-100 text-gray-700 ">
            <div className="line-clamp-5 overflow-y-auto">
              {data.description}
            </div>
          </td>
          <td className="px-4 py-5 text-sm text-center space-x-2">
            <div>
              <EditButton id={data.id} />
              <DeleteButton id={data.id} />
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CardBody;

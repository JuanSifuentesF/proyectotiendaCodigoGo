
import { Card, CardContent } from "@/components/ui/card";

export function ProductCard({ name, price, originalPrice, imageUrl, save }) {
  return (
    <Card className="relative w-full border rounded-xl shadow-sm flex flex-col items-center bg-white transition hover:shadow-md min-w-0 ">
      <div className="absolute top-0 right-0  bg-blue-500 text-white text-xs px-2 py-1 rounded-bl-xl">
        56% OFF
      </div>
      <img src={imageUrl} alt={name} className="w-full h-40 object-contain p-4" />
      <CardContent className="space-y-1 px-4 pb-4">
        <h3 className="text-sm font-medium">{name}</h3>
        <div className="text-lg font-semibold text-black">₹{price}</div>
        <div className="line-through text-gray-500 text-sm">₹{originalPrice}</div>
        <div className="text-green-600 text-sm">Save – ₹{save}</div>
      </CardContent>
    </Card>
  );
}

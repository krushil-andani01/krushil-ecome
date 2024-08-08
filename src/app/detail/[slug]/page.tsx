import MainLayout from "@/pages/component/common/MainLayout";
import SingleProduct from "@/pages/component/detail/SingleProduct";

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <MainLayout>
        <SingleProduct slug={params.slug} />
      </MainLayout>
    </div>
  );
}



import ContentFormEdit from "@/section/blog/edit/ content-form-edit";


export default function Page({ params }: { params: {slug :string} }) {


  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>edit your a blog</h1>

        <ContentFormEdit params={params} />
      </div>
    </section>
  )
}
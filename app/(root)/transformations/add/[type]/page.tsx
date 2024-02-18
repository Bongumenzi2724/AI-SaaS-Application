import Header from '@/components/Shared/Header'
import TransformationForm from '@/components/Shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/action/user.action';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({params:{type}}:SearchParamProps) => {

   const transformation=transformationTypes[type];
    const {userId}=auth()

    if(!userId) redirect('/sign-in')

    const user = await getUserById(userId)

  return (
    <>
        <Header title={transformation.title} subTitle={transformation.subTitle}/>
        <TransformationForm 
            action="Add" 
            userId={user._id}
            type={transformation.type as TransformationTypeKey}
            creditBalance={user.creditBalance}
        />
    </>
  ) 
}

export default AddTransformationTypePage
"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { GenderOptions } from "@/constants"
import { Select } from "./ui/select"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import {
  Form, FormControl,
  
} from "@/components/ui/form"
import CustomFormField from "./CustomFormField"
import SubmitButton from "./SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { Label } from "./ui/label"
import { enrollTrainee } from "@/lib/actions/actions"

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}

 

 
export function ModalForm() {
  const [isLoading, setIsLoading] = useState(false);
 
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })
 
  
  const onSubmit = (values: z.infer<typeof UserFormValidation>) => {
   
    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };
  
  return (
    
    <Form {...form}>
      <form action='https://getform.io/f/ayvpdwkb' method="POST" className=" z-10 flex-1 space-y-6 w-full text-left text-[#3C4526] text-[14px] font-[400]">

        <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="name"
        label="Full name:"
        
       
        
        />
        <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="email"
        label="Email:"
       />

<CustomFormField 
        fieldType={FormFieldType.PHONE_INPUT}
        control={form.control}
        name="phone"
        label="Phone Number:"
        placeholder="8061230727"
       />

<CustomFormField 
        fieldType={FormFieldType.DATE_PICKER}
        control={form.control}
        name="birthDate"
        label="Date of Birth:"
        
       />

<CustomFormField 
        fieldType={FormFieldType.SKELETON}
        control={form.control}
        name="gender"
        label="Gender:"
        renderSkeleton={(field) =>(
          <FormControl>
            <RadioGroup  className="flex h-11 gap-10" onValueChange={field.onChange} defaultValue={field.value}>
              {GenderOptions.map((option) =>(
                <div key={option}
                className="radio-group">
                 <RadioGroupItem value={option} id={option} />
                 <Label htmlFor={option} className="cursor-pointer ml-2">
                  {option}
                 </Label>
                </div>
              )
              )}
            </RadioGroup>
          </FormControl>
        )}
       />
        <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="school"
        label="School:"
       />
       <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="academics"
        label="Academics:"
       />
       <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="coach"
        label="Coach:"
       />
       <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="bouncingyear"
        label="Ball bouncing year:"
       />
        <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="goals"
        label="Future Goals:"
       />
        <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="parent"
        label="Parents Stand:"
       />

       
        <SubmitButton isLoading={isLoading}>
          Enroll Now
        </SubmitButton>
      </form>
    </Form>
   
  )
}

export default ModalForm
"use client"
import { Color, Size } from '@/types'
import React, { useState } from 'react'
import Button from '../../../../../components/ui/button';
import { Plus, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import IconButton from '../../../../../components/ui/icon-button';
import Filter from './filter';

type Props = {
    sizes: Size[];
    colors: Color[];
}

export default function MobileFilter({sizes, colors}: Props) {


    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

  return (
    <>
     <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
        <span>Filter</span>
        <Plus size={20} />
     </Button>
     <Dialog as='div' open={open} onClose={onClose} className="relative z-40 lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-40">
            <div className="fixed inset-0 z-40 flex">
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                    <div className="items-center flex justify-end mt-4 mr-6">
                        <IconButton icon={<X size={15} />} onClick={onClose} />
                    </div>
                    <div className="p-4">
                        <Filter name='Sizes' valueKey="sizeId" data={sizes} />
                        <Filter name='Colors' valueKey="colorId" data={colors} />
                    </div>
                </Dialog.Panel>
            </div>
        </div>
     </Dialog>
    </>
  )
}
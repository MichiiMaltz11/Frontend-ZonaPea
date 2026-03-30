// src/components/CommentsSection.tsx
import { useEffect, useState } from "react";
import type { PlateInfoProps } from "../interface/PlateInfo";
import Menu from "./Menu";

import Button from "./Button";
import Text from "./Text";
import FormContainer from "./FormContainer";
import PlateForm from "./PlateForm";
import { useMenu } from "../hooks/useMenu";
import { useLocalSection } from "../hooks/useLocalSection";
import { useUser } from "../context/UserContext";

export default function MenuSection({ localId }: { localId: string }) {
  const {
    plates,
    setPlates,
    editeModeOn,
    setEditeModeOn,
    showForm,
    setShowForm,
    selectedPlate,
    setSelectedPlate,
    deleteOptionActive,
    setDeleteOptionActive,
    className,
    text,
    mode,
    formTitle,
    handleAddPlate,
    handleEditPlate,
    handleSubmit,
    handleDelete,
  } = useMenu(localId);

  const { isLocalOwner } = useLocalSection({ id: localId });

  return (
    <section className="flex flex-col items-center p-6 gap-5 relative">
      <Menu
        mode={mode}
        plateInfo={plates}
        onAdd={handleAddPlate}
        onEdit={handleEditPlate}
      />
      {isLocalOwner && (
        <Button
          className={className.button}
          onClick={() => {
            setShowForm(false);
            setEditeModeOn(!editeModeOn);
          }}
        >
          <Text text={text} className={className.text} />
        </Button>
      )}
      {showForm && (
        <>
          <div className="absolute w-full min-h-full z-30 flex items-center justify-center">
            <div className="bg-black opacity-30 w-full h-full absolute z-10" />

            <div className="py-20 px-36 w-full h-full z-20 relative">
              <FormContainer<PlateInfoProps>
                handleDelete={handleDelete}
                handleCancel={() => setShowForm(false)}
                handleSubmit={handleSubmit}
                title={formTitle}
                className={{ formHeader: { mainWrapper: "bg-primary-yellow" } }}
                value={selectedPlate}
                onChange={setSelectedPlate}
                deleteOption={deleteOptionActive}
                form={({ value, onChange }) => (
                  <PlateForm value={value} onChange={onChange} />
                )}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

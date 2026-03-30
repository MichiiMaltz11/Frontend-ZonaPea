// src/components/CommentsSection.tsx

import { useLocalSection } from "../hooks/useLocalSection";
import type { LocalInfoProps } from "../interface/LocalInfo";
import Button from "./Button";
import CommentsSection from "./CommentsSection";
import Description from "./Description";
import FormContainer from "./FormContainer";
import InfoSection from "./InfoSection";
import LocalForm from "./LocalForm";
import Text from "./Text";
import IconButton from "./IconButton";
import { LuHeart } from "react-icons/lu";
import type { LocalInfoSectionProps } from "../interface/LocalInfoSection";
import { getImageSrc } from "../utils/verifyImgType";

export default function LocalInfoSection({ localId }: LocalInfoSectionProps) {
  const {
    className,
    newLocalInfo,
    setNewLocalInfo,
    showForm,
    setShowForm,
    localInfo,
    infoArray,
    handleSubmitPut,
    handleFavoriteToggle,
    isLocalOwner,
  } = useLocalSection({ id: localId });

  return (
    <section className="flex flex-col gap-5">
      {localInfo.image && (
        <figure className="w-full h-60 overflow-clip relative">
          <img
            className="w-full h-full object-cover absolute"
            src={getImageSrc(localInfo.image)}
            alt=""
          />
          <IconButton
            icon={LuHeart}
            onClick={() => {
              handleFavoriteToggle();
            }}
            className={{
              button: "absolute z-10 right-3 top-3",
              icon: className,
            }}
          />
        </figure>
      )}

      <div className="flex flex-col gap-16 pt-10 px-20">
        <Text text={localInfo.name} className="text-4xl font-semibold" />

        <Description description={localInfo.description} />

        <div className="flex justify-between">
          <CommentsSection
            className={{ wrapper: "w-72" }}
            isSummarySection={true}
            localId={localId}
            localOwnerName=""
            optionsIsNeverShowed={false}
          />
          {<InfoSection info={infoArray} />}
        </div>

        {isLocalOwner && (
          <Button
            className="w-full cursor-pointer bg-transparent border-2 hover:border-yellow-400 hover:bg-transparent border-primary-yellow"
            onClick={() => {
              setShowForm(true);
            }}
          >
            <Text
              text="Editar Datos"
              className="text-primary-yellow text-xl font-semibold hover:text-yellow-400 duration-200 ease-in-out"
            />
          </Button>
        )}
      </div>
      {showForm && isLocalOwner && (
        <>
          <div className="absolute w-full min-h-full z-30 flex items-center justify-center">
            <div className="bg-black opacity-30 w-full h-full absolute z-10" />

            <div className="py-20 px-36 w-full h-full z-20 relative">
              <FormContainer<LocalInfoProps>
                handleDelete={() => {}}
                handleCancel={() => setShowForm(false)}
                handleSubmit={handleSubmitPut}
                title={"Editar datos del local"}
                className={{ formHeader: { mainWrapper: "bg-primary-blue" } }}
                value={newLocalInfo}
                onChange={setNewLocalInfo}
                deleteOption={false}
                form={({ value, onChange }) => (
                  <LocalForm value={value} onChange={onChange} />
                )}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

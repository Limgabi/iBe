import { meongiB } from "@/src/app/fonts";
import { ReactNode } from "react";
import Icon from "../icon/icon";
import { THEME_UI } from "@/src/constants/theme";
import { useThemeContext } from "@/src/contexts/theme";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  gapClassName?: string; // ex) gap-3 | gap-4 | gap-6
  zClassName?: string; // ex) z-50 | z-60 | z-[9999]
}

/**
 * 모달 공통 컴포넌트
 * - 닫기 버튼 클릭 시 닫힘 처리
 * - 모달 레이아웃(중앙 정렬) 및 공통 스타일/애니메이션 적용
 * - gapClassName: 모달 카드 내부 요소 간 간격(gap) 조절 (기본: gap-3)
 * - zClassName: 모달 컨테이너의 z-index 지정 (기본: z-100)
 */
export default function Modal({
  onClose,
  children,
  gapClassName = "gap-3",
  zClassName = "z-100",
}: ModalProps) {
  const { theme } = useThemeContext();

  const mainColor = THEME_UI[theme].inquiry.text;

  const modalTitle = () => {
    switch (theme) {
      case "new-year":
        return "iBe-Lucky";
      case "white-day":
        return "Sweet Letter";
      default:
        return "iBe-Lucky";
    }
  };

  return (
    <div
      className={`fixed inset-0 ${zClassName}`}
      aria-modal="true"
      role="dialog"
    >
      {/** 오버레이 */}
      <div className="absolute inset-0 modal-backdrop" />

      {/** 화면 중앙 정렬을 위한 컨테이너 */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-97.5 items-center justify-center px-6">
        {/** 모달 내부 */}
        <div
          className={`w-full max-w-97.5 rounded-[20px] bg-[#FFFFFF] py-8 px-5 modal-card flex flex-col ${gapClassName} text-center`}
          onClick={(e) => e.stopPropagation()}
        >
          {/** 헤더 (서비스명 + 닫기 버튼) */}
          <div className="relative flex w-full items-center">
            <span
              className={[
                `${meongiB.className} absolute left-1/2 -translate-x-1/2 text-modal-service`,
              ].join(" ")}
              style={{
                color: mainColor,
              }}
            >
              {modalTitle()}
            </span>

            <button className="ml-auto cursor-pointer" onClick={onClose}>
              <Icon name="x" width={24} height={24} color={mainColor} />
            </button>
          </div>

          {/** 본문 컨텐츠 */}
          {children}
        </div>
      </div>

      {/** 모달 백드롭/카드 애니메이션 스타일 */}
      <style jsx global>{`
        .modal-backdrop {
          background: #0000004d;
          animation: modalFadeIn 160ms ease-out both;
        }
        .modal-card {
          transform-origin: 50% 70%;
          animation: modalCardIn 220ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes modalCardIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";

const FadeInComp = ({ data, animate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        // 요소가 뷰포트에 들어오면 isVisible 상태를 true로 설정
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return (
    <div ref={ref} className={`fade-in ${isVisible ? animate : ""}`}>
      {data}
    </div>
  );
};

export default FadeInComp;

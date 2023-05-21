import { useCallback, useEffect, useState } from "react";

export function usePosition(ref: any) {
  const [prevElement, setPrevElement] = useState<HTMLElement | null>(null);
  const [nextElement, setNextElement] = useState<HTMLElement | null>(null);
  function getPrevElement(list: Array<any>) {
    const sibling = list[0].previousElementSibling;

    if (sibling instanceof HTMLElement) {
      return sibling;
    }

    return sibling;
  }

  function getNextElement(list: Array<any>) {
    const sibling = list[list.length - 1].nextElementSibling;

    if (sibling instanceof HTMLElement) {
      return sibling;
    }

    return null;
  }
  useEffect(() => {
    const element = ref.current;

    const update = () => {
      const rect = element.getBoundingClientRect();

      const visibleElements = Array.from(element.children).filter(
        (child: any) => {
          const childRect = child.getBoundingClientRect();

          return childRect.left >= rect.left && childRect.right <= rect.right;
        }
      );

      if (visibleElements.length > 0) {
        setPrevElement(getPrevElement(visibleElements));
        setNextElement(getNextElement(visibleElements));
      }
    };

    update();

    element.addEventListener("scroll", update, { passive: true });

    return () => {
      element.removeEventListener("scroll", update, { passive: true });
    };
  }, [ref]);

  const scrollToElement = useCallback(
    (element: any) => {
      const currentNode = ref.current;

      if (!currentNode || !element) return;

      let newScrollPosition;

      newScrollPosition =
        element.offsetLeft +
        element.getBoundingClientRect().width / 2 -
        currentNode.getBoundingClientRect().width / 2;

      currentNode.scroll({
        left: newScrollPosition,
        behavior: "smooth",
      });
    },
    [ref]
  );

  const scrollRight = useCallback(
    () => scrollToElement(nextElement),
    [scrollToElement, nextElement]
  );

  const scrollLeft = useCallback(
    () => scrollToElement(prevElement),
    [scrollToElement, prevElement]
  );

  return {
    hasItemsOnLeft: prevElement !== null,
    hasItemsOnRight: nextElement !== null,
    scrollRight,
    scrollLeft,
  };
}

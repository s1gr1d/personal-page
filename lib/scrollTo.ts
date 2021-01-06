export const scrollToRef = (elementSelector: string) => (): void => {
  const element = document.querySelector<HTMLElement>(elementSelector);
  const y = element && element.getBoundingClientRect().top + window.pageYOffset;

  window.scroll({
    top: y ? y : window.pageYOffset,
    behavior: "smooth",
  });
};

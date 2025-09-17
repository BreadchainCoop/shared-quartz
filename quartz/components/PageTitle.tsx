import { pathToRoot, joinSegments } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img src={joinSegments(baseDir, "static/bread-mono.png")} alt="Bread Logo" class="bread-logo" />
        {title}
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 0.5rem;
  }

  .bread-logo {
    height: 1.75rem;
    width: auto;
    flex-shrink: 0;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor

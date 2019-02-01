import { library } from '@fortawesome/fontawesome-svg-core'
import * as FreeBrandsIcons from '@fortawesome/free-brands-svg-icons'

for (let icon in FreeBrandsIcons) {
  if (FreeBrandsIcons[icon].iconName) {
    library.add(
      FreeBrandsIcons[icon]
    )
  }
}

export const bootstrap = async () => {
  //
}

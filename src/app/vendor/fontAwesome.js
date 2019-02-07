import { library } from '@fortawesome/fontawesome-svg-core'
import * as FreeSolidIcons from '@fortawesome/free-solid-svg-icons'
import * as FreeBrandsIcons from '@fortawesome/free-brands-svg-icons'

for (let icon in FreeSolidIcons) {
  if (FreeSolidIcons[icon].iconName) {
    library.add(
      FreeSolidIcons[icon]
    )
  }
}
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

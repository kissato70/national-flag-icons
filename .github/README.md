# National flag icons for React
This component will return a flag icon, depending on the iso-2 country code given as a property.

## Installation
```bash
npm install national-flag-icons
```
&nbsp;&nbsp;&nbsp;&nbsp; or
```bash
yarn add national-flag-icons
```

## __Usage__
Plain React:
```javascript
import React from 'react';
import Flag from 'national-flag-icons';

const App = ()=> {
  return (
    <Flag flagCode="us" height={25} />
  )
}
```

React with Typescript:
```javascript
import React from 'react';
import Flag from 'national-flag-icons';

const App = ()=> {
  let flag = "us" as const;
  let sizeY : number = 30;
  return (
    <Flag flagCode={flag} height={sizeY}/>
  )
}
```

<br>  

## Component properties
|Property|Typescript type|Description|
|--------|:-------:|----------|
|`flagCode`|flagCodeType|ISO-2 country codes.<br>Please note: Instead of `en` (which is invalid) use `us`,`gb` or `au`, depending on the flag, you want to see. The module will drop an error on console if invalid code is given. |
|`className`|string|(Optional) ClassName property, default value is `"languageFlag"`.|
|`style`|| (Optional) Inline style properties.|
|`height`|number| (Optional) The height in pixels. The flag will be scaled proportionaly. Default size is : 22 x 14 pixels. |

### __<ins>Usable flag codes:</ins>__
`ad`, `at`, `bh`, `by`, `cm`, `dj`, `et`, `ge`, `gs`, `id`, `jm`, `kw`, `lu`, `ml`, `mw`, `nl`, `ph`, `re`, `sh`, `sy`, `tn`, `uy`, `ye`, `ae`, `au`, `bi`, `bz`, `cn`, `dk`, `eu`, `gf`, `gt`, `ie`, `jo`, `ky`, `lv`, `mm`, `mx`, `no`, `pk`, `ro`, `si`, `sz`, `to`, `uz`, `yt`, `af`, `aw`, `bj`, `ca`, `co`, `dm`, `fi`, `gg`, `gu`, `il`, `jp`, `kz`, `ly`, `mn`, `my`, `np`, `pl`, `rs`, `sj`, `tc`, `tr`, `va`, `za`, `ag`, `ax`, `bm`, `cc`, `cr`, `do`, `fj`, `gh`, `gw`, `im`, `ke`, `la`, `ma`, `mo`, `mz`, `nr`, `pm`, `ru`, `sk`, `td`, `tt`, `vc`, `zm`, `ai`, `az`, `bn`, `cd`, `cs`, `dz`, `fk`, `gi`, `gy`, `in`, `kg`, `lb`, `mc`, `mp`, `na`, `nu`, `pn`, `rw`, `sl`, `tf`, `tv`, `ve`, `zw`, `al`, `ba`, `bo`, `cf`, `cu`, `ec`, `fm`, `gl`, `hk`, `io`, `kh`, `lc`, `md`, `mq`, `nc`, `nz`, `pr`, `sa`, `sm`, `tg`, `tw`, `vg`, `am`, `bb`, `br`, `cg`, `cv`, `ee`, `fo`, `gm`, `hm`, `iq`, `ki`, `li`, `me`, `mr`, `nc2`, `om`, `ps`, `sb`, `sn`, `th`, `tz`, `vi`, `an`, `bd`, `bs`, `ch`, `cx`, `eg`, `fr`, `gn`, `hn`, `ir`, `km`, `lk`, `mf`, `ms`, `ne`, `pa`, `pt`, `sc`, `so`, `tj`, `ua`, `vn`, `ao`, `be`, `bt`, `ci`, `cy`, `eh`, `ga`, `gp`, `hr`, `is`, `kn`, `lr`, `mg`, `mt`, `nf`, `pe`, `pw`, `sd`, `sr`, `tk`, `ug`, `vu`, `ar`, `bf`, `bv`, `ck`, `cz`, `er`, `gb`, `gq`, `ht`, `it`, `kp`, `ls`, `mh`, `mu`, `ng`, `pf`, `py`, `se`, `st`, `tl`, `um`, `wf`, `as`, `bg`, `bw`, `cl`, `de`, `es`, `gd`, `gr`, `hu`, `je`, `kr`, `lt`, `mk`, `mv`, `ni`, `pg`, `qa`, `sg`, `sv`, `tm`, `us`, `ws`

<br>
Example code:  

```javascript
<Flag flagCode="us" height={25}  className="myFlag" style={{ boxShadow: "2px 2px 1px #9E9E9E" }} />  
```
<br>  

## Other exported items
|Item|Description|
|---|----|
|`flagCodeType`|Type definition of string literals usable as flagCode.|
|`flagArray`|String array of usable flagCodes.|
|`flagProps`|type flagProps = \{ style?: CSSProperties, className? : string, height?: number } & flagCodeType|


<br>

## __Alternate usage__
There is a second component which can be used alternatively. The original component gives back an image encapsulated into a div element.  
The alternate component (`Flag2`) is returning a single div element, where the background image is used as the flag image. In certain situations it gives you a cleaner and simpler html code, but you can't resize the icon, it is keeping the original dimensions of 22 by 14 pixels. If you try to set the size, the image will fall apart. This is because the component is using the sprite image technology, where a big, matrixed file is holding together the individual flag images, and only the necessary proportion of that image is being showed.  

```javascript
import React from 'react';
import Flag2 from 'national-flag-icons';

const App = ()=> {
  return (
    <Flag2 flagCode="us" />
  )
}
```
<br><br>

>Written by: __Attila Kiss__, [e-LET Kft](https://e-let.hu), Hungary  ( GitHub: [kissato70](https://github.com/kissato70) )

 > Licence:  MIT

> Report issues [here](https://github.com/kissato70/national-flag-icons/issues).

<br>  

### Support the project >>> [Donation](https://bit.ly/kissato70_paypal_donate)  
_Please support the further releases, if you like this component! **Thank you!**_  
<br/>
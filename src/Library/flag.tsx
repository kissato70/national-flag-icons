import React, { CSSProperties } from 'react';
import Flags from './flagMap.png';

export type flagCodeType =  "ad"|"at"|"bh"|"by"|"cm"|"dj"|"et"|"ge"|"gs"|"id"|"jm"|"kw"|"lu"|"ml"|"mw"|"nl"|"ph"|"re"|"sh"|"sy"|"tn"|"uy"|"ye"|"ae"|"au"|"bi"|"bz"|"cn"|"dk"|"eu"|"gf"|"gt"|"ie"|"jo"|"ky"|"lv"|"mm"|"mx"|"no"|"pk"|"ro"|"si"|"sz"|"to"|"uz"|"yt"|"af"|"aw"|"bj"|"ca"|"co"|"dm"|"fi"|"gg"|"gu"|"il"|"jp"|"kz"|"ly"|"mn"|"my"|"np"|"pl"|"rs"|"sj"|"tc"|"tr"|"va"|"za"|"ag"|"ax"|"bm"|"cc"|"cr"|"do"|"fj"|"gh"|"gw"|"im"|"ke"|"la"|"ma"|"mo"|"mz"|"nr"|"pm"|"ru"|"sk"|"td"|"tt"|"vc"|"zm"|"ai"|"az"|"bn"|"cd"|"cs"|"dz"|"fk"|"gi"|"gy"|"in"|"kg"|"lb"|"mc"|"mp"|"na"|"nu"|"pn"|"rw"|"sl"|"tf"|"tv"|"ve"|"zw"|"al"|"ba"|"bo"|"cf"|"cu"|"ec"|"fm"|"gl"|"hk"|"io"|"kh"|"lc"|"md"|"mq"|"nc"|"nz"|"pr"|"sa"|"sm"|"tg"|"tw"|"vg"|"am"|"bb"|"br"|"cg"|"cv"|"ee"|"fo"|"gm"|"hm"|"iq"|"ki"|"li"|"me"|"mr"|"nc2"|"om"|"ps"|"sb"|"sn"|"th"|"tz"|"vi"|"an"|"bd"|"bs"|"ch"|"cx"|"eg"|"fr"|"gn"|"hn"|"ir"|"km"|"lk"|"mf"|"ms"|"ne"|"pa"|"pt"|"sc"|"so"|"tj"|"ua"|"vn"|"ao"|"be"|"bt"|"ci"|"cy"|"eh"|"ga"|"gp"|"hr"|"is"|"kn"|"lr"|"mg"|"mt"|"nf"|"pe"|"pw"|"sd"|"sr"|"tk"|"ug"|"vu"|"ar"|"bf"|"bv"|"ck"|"cz"|"er"|"gb"|"gq"|"ht"|"it"|"kp"|"ls"|"mh"|"mu"|"ng"|"pf"|"py"|"se"|"st"|"tl"|"um"|"wf"|"as"|"bg"|"bw"|"cl"|"de"|"es"|"gd"|"gr"|"hu"|"je"|"kr"|"lt"|"mk"|"mv"|"ni"|"pg"|"qa"|"sg"|"sv"|"tm"|"us"|"ws"


export type flagProps = {
  style?: CSSProperties,
  className? : string,
  height?: number,
  flagCode : flagCodeType
}

type posType = {
  x: number,
  y: number
}

export const flagArray = ["ad","at","bh","by","cm","dj","et","ge","gs","id","jm","kw","lu","ml","mw","nl","ph","re","sh","sy","tn","uy","ye","ae","au","bi","bz","cn","dk","eu","gf","gt","ie","jo","ky","lv","mm","mx","no","pk","ro","si","sz","to","uz","yt","af","aw","bj","ca","co","dm","fi","gg","gu","il","jp","kz","ly","mn","my","np","pl","rs","sj","tc","tr","va","za","ag","ax","bm","cc","cr","do","fj","gh","gw","im","ke","la","ma","mo","mz","nr","pm","ru","sk","td","tt","vc","zm","ai","az","bn","cd","cs","dz","fk","gi","gy","in","kg","lb","mc","mp","na","nu","pn","rw","sl","tf","tv","ve","zw","al","ba","bo","cf","cu","ec","fm","gl","hk","io","kh","lc","md","mq","nc","nz","pr","sa","sm","tg","tw","vg","am","bb","br","cg","cv","ee","fo","gm","hm","iq","ki","li","me","mr","nc2","om","ps","sb","sn","th","tz","vi","an","bd","bs","ch","cx","eg","fr","gn","hn","ir","km","lk","mf","ms","ne","pa","pt","sc","so","tj","ua","vn","ao","be","bt","ci","cy","eh","ga","gp","hr","is","kn","lr","mg","mt","nf","pe","pw","sd","sr","tk","ug","vu","ar","bf","bv","ck","cz","er","gb","gq","ht","it","kp","ls","mh","mu","ng","pf","py","se","st","tl","um","wf","as","bg","bw","cl","de","es","gd","gr","hu","je","kr","lt","mk","mv","ni","pg","qa","sg","sv","tm","us","ws"];
  
const imgPos = (flagCode:string) =>
{
  let pos: posType = { x: 0, y: 0 };
  let lang = flagArray.indexOf(flagCode);
  pos.y = Math.floor(lang / 16);
  pos.x = (lang - (pos.y * 16));
  pos.x = -1 * pos.x * 22;
  pos.y = -1 * pos.y * 14;
  return pos;
}  

const Flag2 = (props: flagProps) =>
{
  if (flagArray.indexOf(props.flagCode)=== -1)
  {
    console.error("Invalid flagCode value used: ", props.flagCode);
    return(<></>);
  }
  let pos = imgPos(props.flagCode)
  let flagStyle:CSSProperties = {
    backgroundImage: `url(${Flags})`,
    backgroundPosition: `${pos.x}px ${pos.y}px`,
    backgroundRepeat: 'no-repeat',
    display: "block",
    width: "22px",
    height: "14px"
  }
  return (
    <div className={props.className? props.className : "languageFlag"} style={{ ...flagStyle, ...props.style }}></div>
  )
}
export { Flag2 };

const Flag = (props: flagProps) =>
{
  if (flagArray.indexOf(props.flagCode)=== -1)
  {
    console.error("Invalid flagCode value used: ", props.flagCode);
    return(<></>);
  }
  let pos = imgPos(props.flagCode);
  let flagStyle: CSSProperties = {
    position: "relative",
    overflow: "hidden",
    height: "14px",
    width: "22px",
    padding: "0",
    margin: "0",
    zoom: `${props.height? (props.height / 14) : 1 }`
  };
  let imgStyle: CSSProperties = {
    position: "absolute",
    top: `${pos.y}px`,
    left: `${pos.x}px`
  };
  return (
    <div className={props.className? props.className : "languageFlag"} style={{ ...flagStyle, ...props.style }}>
      <img style={imgStyle} width={352} height={224} alt={props.flagCode} src={Flags}/>
    </div>
  )
}
export default Flag;
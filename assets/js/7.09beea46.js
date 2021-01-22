(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{733:function(s,t,a){"use strict";a.r(t);var e=a(104),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证"}},[s._v("#")]),s._v(" 认证")]),s._v(" "),a("h2",{attrs:{id:"认证-是谁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证-是谁"}},[s._v("#")]),s._v(" 认证(是谁?)")]),s._v(" "),a("p",[a("strong",[s._v("Authentication")]),s._v("  指的是当前用户的身份。也就是俗称的:登录。认证解决 “是谁？”的问题。")]),s._v(" "),a("p",[s._v("一般情况下，系统认证的大致步骤如下：")]),s._v(" "),a("ol",[a("li",[s._v("用户提交认证凭证，如:用户名+密码、手机号+密码等到系统")]),s._v(" "),a("li",[s._v("系统通过数据库或者其他存储查找用户，查找到后进行凭证校验(密码对不对?)")]),s._v(" "),a("li",[s._v("凭证校验通过，对认证行为状态进行记录并且返回给用户访问凭证,如 Session 、Cookie、JWT 等")]),s._v(" "),a("li",[s._v("后续用户携带访问凭证访问系统资源，可对通过缓存对用户身份进行核查")])]),s._v(" "),a("blockquote",[a("p",[s._v("说明: 本框架暂时不涉及 用户凭证的校验功能，框架目前只实现步骤：3、4。也就是对认证状态进行管理和维护，不参与凭据校验和用户身份合法性检查。也就是说你自己判断用户合法后，将相关信息提交给框架，框架对认证授权状态进行管理和维护。")])]),s._v(" "),a("h2",{attrs:{id:"认证信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证信息"}},[s._v("#")]),s._v(" 认证信息")]),s._v(" "),a("p",[s._v("系统提供认证信息实体:UserDetails ,具体信息如下:")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDetails")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Serializable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 用这个数据判断用户是否登录,可以是用户id,手机号、用户名等等，只要能全局唯一标识这个用户即可\n     * <p>\n     * eg:\n     * 1、 租户ID+用户名称: 这样，同一个用户名称不同租户的用户可以各自登录不受影响\n     * <p>\n     * 2、设备类型+用户ID: 同一个用户，可从不同终端登录，而不至于被踢下线\n     *\n     * @return the principal\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPrincipal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 用这个判断用户是否启用\n     *\n     * @return the boolean\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("p",[s._v("用户合法性校验通过后，构造此接口的实现类，实现用户 principal、enabled 接口。")]),s._v(" "),a("h2",{attrs:{id:"缓存支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存支持"}},[s._v("#")]),s._v(" 缓存支持")]),s._v(" "),a("p",[s._v("   用户认证和授权操作是一个比较频繁的操作，每次请求访问系统都会需要对认证状态和权限进行判断，需要频繁读写，所以系统使用缓存对已认证用户的信息和权限进行存储。当发生认证授权行为的时候，首先会从缓存获取，如果缓存中没有，则从数据库获取然后写入缓存。")]),s._v(" "),a("p",[s._v("框架目前缓存了如下认证相关的信息:")]),s._v(" "),a("ul",[a("li",[s._v("认证用户基本信息。也就是将UserDetails实现类信息缓存;")]),s._v(" "),a("li",[s._v("认证用户的权限信息：")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GrantedAuthority")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" authorities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("框架支持两种形式的缓存：")]),s._v(" "),a("ul",[a("li",[s._v("内存缓存: Caffeine")]),s._v(" "),a("li",[s._v("独立缓存: Redis")])]),s._v(" "),a("h2",{attrs:{id:"认证凭据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证凭据"}},[s._v("#")]),s._v(" 认证凭据")]),s._v(" "),a("p",[s._v("   通过认证后，框架会生成认证凭据，以 Session+Cookie 形式实现。当用户提交认证后，框架会按规则(SessionIdGenerator) 产生 Session ，返回给调用方，如果开启了 Cookie，同时还会向客户端请求中设置 Cookie (Header 中的 Set-Cookie 指令) 。")]),s._v(" "),a("p",[s._v("  客户端认证成功后发起其他请求，需要将 SessionId 提交到后台(如果开启 Cookie,浏览器会自动提交)。SessionId 在Cookie、 Header 、Query中均可，框架会按顺序依次解析，找到即停止。")]),s._v(" "),a("blockquote",[a("p",[s._v("关于 SessionId 和 Token。\n"),a("strong",[s._v("Session")]),s._v(": 俗称会话，  "),a("strong",[s._v("Token")]),s._v(" :俗称令牌；\n其实，本质上来说，都是一个一段时间内唯一的字符串，用以标识来访者的合法性。在本框架内，禁用 Cookie 后， SessionID 就相当于 Token。认证成功后，将 SessionId 发给客户端，客户端将其存储在本地 LocalStorage 里，每次请求的时候一并发送至后端。这在 APP后台、者小程序后台、前后端分离等无 Cookie 的场景下比较适合。")])]),s._v(" "),a("h2",{attrs:{id:"关于-jwt-探讨"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-jwt-探讨"}},[s._v("#")]),s._v(" 关于 JWT (探讨)")]),s._v(" "),a("p",[s._v("  Heimdall框架暂时未对 JWT 提供支持。\n  Heimdall框架主要侧重:认证授权状态后台管理，认证授权信息统一由后台进行维护,后台服务需要确切知道，谁?要做什么?能做不能做?结果是什么？如何拒绝阻止非法访问？\n  JWT 所有信息都由使用者持有，后台服务不持有任何信息，也就无法对认证授权信息进行管理。当然了，可以把颁发出去的 jwt 令牌信息在后台保存一份，进行失效处理，这不就是 Session 了么？所以，窃以为，JWT 更适合服务间授权或者临时授权的场景，也就是那种短期内，用一次就失效的场景。这两种模式，其实与是 PC 端还是移动端没任何关系。")]),s._v(" "),a("p",[a("strong",[s._v("举个栗子")])]),s._v(" "),a("blockquote",[a("p",[s._v("  你小区进门需要门禁卡，你有一张，你这是永久的，门禁系统维护着你这张门禁卡的信息，这就相当于 Session.\n  外卖员送餐给你,要进小区，直接把你自己门禁卡给外卖员不安全，只能给个临时许可(临时卡)，有效期写清楚，比如就 2 个小时，外卖员这2 个小时可以进出小区，如果觉得还不安全，有效期可以更短，这个临时出入卡就相当于 JWT。这个临时卡外卖员自己拿着，他在合法时间内进小区，你管不了，他把临时卡给别人，别人进小区，你也管不了。所以愚见以为，JWT 用在充分信任临时授权的场景下更合适。")])]),s._v(" "),a("h2",{attrs:{id:"主要功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要功能"}},[s._v("#")]),s._v(" 主要功能")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("过期机制")]),s._v("：可设置 Session 生命周期，长时间不活动，自动清理。")]),s._v(" "),a("li",[a("strong",[s._v("Session 事件")]),s._v("：Session 在创建销毁等状态下会发出事件，便于调用者做其他操作。")]),s._v(" "),a("li",[a("strong",[s._v("续签机制")]),s._v("：指的是对 Session 的生命时长自动延期的操作，不至于一直在访问还过期了。。\n"),a("ul",[a("li",[s._v("内存缓存：这种情况下，Session 主要依靠lastAccessTime与当前时间来判断是否过期，每次合法访问系统资源，lastAccessTime都会被更新到访问当时的时间。如果长时间不操作，自动清理任务会自动判断并且清理过期 Session。")]),s._v(" "),a("li",[s._v("Redis 缓存：Redis 缓存自身具备过期自动删除的功能。当 Session 的 TTL到 0 后，Redis 会自动清理。这种情况下，续签其实就是将 Session Key 的 TTL 恢复到全局过期时间。框架提供 Redis 缓存的 Session 续签功能，可设置是否续签，以及时间低于全局超时多少比例了续签，这样能避免频繁更新缓存。同时框架还对Redis g 的过期、删除等事件进行了监听，当发生过期和删除操作的时候，做其他一些操作，比如清理在线用户列表缓存等。")])])]),s._v(" "),a("li",[a("strong",[s._v("在线用户列表")]),s._v(" "),a("ul",[a("li",[s._v("内存缓存：在线用户列表不支持分页查询。适用于同时在线用户比较少的情况。")]),s._v(" "),a("li",[s._v("Redis 缓存: 支持分页查询在线用户。在线用户通过ZSet 进行了存储。")])])]),s._v(" "),a("li",[a("strong",[s._v("在线用户踢出")]),s._v("\n支持通过 SessionId 或者 Principal踢出用户，同时支持踢出事件通知功能。")]),s._v(" "),a("li",[a("strong",[s._v("重复登录判定")]),s._v("\n重复登录分两种情况：\n"),a("ul",[a("li",[s._v("用户在提交登录认证请求的时候，请求中携带了合法的未过期的认证凭据(Session Or Cookie)\n框架会判断提交的认证凭据合法性，合法就直接返回，不再执行认证逻辑。")]),s._v(" "),a("li",[s._v("用户在提交登录认证请求的时候，未携带任何认证凭据\n首先根据提交的认证实体中的 UserDetails.getPrincipal()信息，在缓存中查找是否存在，如果存在则返回已经存在的 Session 信息，否则执行新的认证流程。")])])])]),s._v(" "),a("h2",{attrs:{id:"认证信息-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证信息-2"}},[s._v("#")]),s._v(" 认证信息")]),s._v(" "),a("p",[s._v("系统提供获取当前认证用户信息注解: @CurrentUser SimpleSession user")]),s._v(" "),a("p",[s._v("使用示例：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/current"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SimpleSession")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getCurrentUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@CurrentUser")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SimpleSession")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//可获取自定义 UserDeitals 实现")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//final PcUserDetails details = (PcUserDetails) user.getDetails();")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//如果 user 为空，会抛出401 异常")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
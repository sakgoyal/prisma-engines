(function() {var type_impls = {
"mysql_common":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ConstU8%3CT,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#225-233\">source</a><a href=\"#impl-ConstU8%3CT,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#226-228\">source</a><h4 class=\"code-header\">pub const fn <a href=\"mysql_common/misc/raw/int/struct.ConstU8.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section><section id=\"method.value\" class=\"method\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#230-232\">source</a><h4 class=\"code-header\">pub const fn <a href=\"mysql_common/misc/raw/int/struct.ConstU8.html#tymethod.value\" class=\"fn\">value</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a></h4></section></div></details>",0,"mysql_common::packets::FixedLengthFieldsLen","mysql_common::packets::ErrPacketHeader","mysql_common::packets::LocalInfileHeader","mysql_common::packets::AuthMoreDataHeader","mysql_common::packets::AuthSwitchRequestHeader","mysql_common::packets::ComStmtExecuteHeader","mysql_common::packets::ComStmtSendLongDataHeader","mysql_common::packets::ComRegisterSlaveHeader","mysql_common::packets::ComTableDumpHeader","mysql_common::packets::ComBinlogDumpHeader","mysql_common::packets::ComBinlogDumpGtidHeader","mysql_common::packets::SemiSyncAckPacketPacketHeader"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-ConstU8%3CT,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#impl-PartialEq-for-ConstU8%3CT,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","mysql_common::packets::FixedLengthFieldsLen","mysql_common::packets::ErrPacketHeader","mysql_common::packets::LocalInfileHeader","mysql_common::packets::AuthMoreDataHeader","mysql_common::packets::AuthSwitchRequestHeader","mysql_common::packets::ComStmtExecuteHeader","mysql_common::packets::ComStmtSendLongDataHeader","mysql_common::packets::ComRegisterSlaveHeader","mysql_common::packets::ComTableDumpHeader","mysql_common::packets::ComBinlogDumpHeader","mysql_common::packets::ComBinlogDumpGtidHeader","mysql_common::packets::SemiSyncAckPacketPacketHeader"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ConstU8%3CT,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#impl-Debug-for-ConstU8%3CT,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","mysql_common::packets::FixedLengthFieldsLen","mysql_common::packets::ErrPacketHeader","mysql_common::packets::LocalInfileHeader","mysql_common::packets::AuthMoreDataHeader","mysql_common::packets::AuthSwitchRequestHeader","mysql_common::packets::ComStmtExecuteHeader","mysql_common::packets::ComStmtSendLongDataHeader","mysql_common::packets::ComRegisterSlaveHeader","mysql_common::packets::ComTableDumpHeader","mysql_common::packets::ComBinlogDumpHeader","mysql_common::packets::ComBinlogDumpGtidHeader","mysql_common::packets::SemiSyncAckPacketPacketHeader"],["<section id=\"impl-Copy-for-ConstU8%3CT,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#impl-Copy-for-ConstU8%3CT,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;</h3></section>","Copy","mysql_common::packets::FixedLengthFieldsLen","mysql_common::packets::ErrPacketHeader","mysql_common::packets::LocalInfileHeader","mysql_common::packets::AuthMoreDataHeader","mysql_common::packets::AuthSwitchRequestHeader","mysql_common::packets::ComStmtExecuteHeader","mysql_common::packets::ComStmtSendLongDataHeader","mysql_common::packets::ComRegisterSlaveHeader","mysql_common::packets::ComTableDumpHeader","mysql_common::packets::ComBinlogDumpHeader","mysql_common::packets::ComBinlogDumpGtidHeader","mysql_common::packets::SemiSyncAckPacketPacketHeader"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-ConstU8%3CT,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#impl-Default-for-ConstU8%3CT,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","mysql_common::packets::FixedLengthFieldsLen","mysql_common::packets::ErrPacketHeader","mysql_common::packets::LocalInfileHeader","mysql_common::packets::AuthMoreDataHeader","mysql_common::packets::AuthSwitchRequestHeader","mysql_common::packets::ComStmtExecuteHeader","mysql_common::packets::ComStmtSendLongDataHeader","mysql_common::packets::ComRegisterSlaveHeader","mysql_common::packets::ComTableDumpHeader","mysql_common::packets::ComBinlogDumpHeader","mysql_common::packets::ComBinlogDumpGtidHeader","mysql_common::packets::SemiSyncAckPacketPacketHeader"],["<section id=\"impl-StructuralEq-for-ConstU8%3CT,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#impl-StructuralEq-for-ConstU8%3CT,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;</h3></section>","StructuralEq","mysql_common::packets::FixedLengthFieldsLen","mysql_common::packets::ErrPacketHeader","mysql_common::packets::LocalInfileHeader","mysql_common::packets::AuthMoreDataHeader","mysql_common::packets::AuthSwitchRequestHeader","mysql_common::packets::ComStmtExecuteHeader","mysql_common::packets::ComStmtSendLongDataHeader","mysql_common::packets::ComRegisterSlaveHeader","mysql_common::packets::ComTableDumpHeader","mysql_common::packets::ComBinlogDumpHeader","mysql_common::packets::ComBinlogDumpGtidHeader","mysql_common::packets::SemiSyncAckPacketPacketHeader"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ConstU8%3CT,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#impl-Clone-for-ConstU8%3CT,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","mysql_common::packets::FixedLengthFieldsLen","mysql_common::packets::ErrPacketHeader","mysql_common::packets::LocalInfileHeader","mysql_common::packets::AuthMoreDataHeader","mysql_common::packets::AuthSwitchRequestHeader","mysql_common::packets::ComStmtExecuteHeader","mysql_common::packets::ComStmtSendLongDataHeader","mysql_common::packets::ComRegisterSlaveHeader","mysql_common::packets::ComTableDumpHeader","mysql_common::packets::ComBinlogDumpHeader","mysql_common::packets::ComBinlogDumpGtidHeader","mysql_common::packets::SemiSyncAckPacketPacketHeader"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-ConstU8%3CT,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#impl-Hash-for-ConstU8%3CT,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#242-244\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut H</a>)<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","mysql_common::packets::FixedLengthFieldsLen","mysql_common::packets::ErrPacketHeader","mysql_common::packets::LocalInfileHeader","mysql_common::packets::AuthMoreDataHeader","mysql_common::packets::AuthSwitchRequestHeader","mysql_common::packets::ComStmtExecuteHeader","mysql_common::packets::ComStmtSendLongDataHeader","mysql_common::packets::ComRegisterSlaveHeader","mysql_common::packets::ComTableDumpHeader","mysql_common::packets::ComBinlogDumpHeader","mysql_common::packets::ComBinlogDumpGtidHeader","mysql_common::packets::SemiSyncAckPacketPacketHeader"],["<section id=\"impl-Eq-for-ConstU8%3CT,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#impl-Eq-for-ConstU8%3CT,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;</h3></section>","Eq","mysql_common::packets::FixedLengthFieldsLen","mysql_common::packets::ErrPacketHeader","mysql_common::packets::LocalInfileHeader","mysql_common::packets::AuthMoreDataHeader","mysql_common::packets::AuthSwitchRequestHeader","mysql_common::packets::ComStmtExecuteHeader","mysql_common::packets::ComStmtSendLongDataHeader","mysql_common::packets::ComRegisterSlaveHeader","mysql_common::packets::ComTableDumpHeader","mysql_common::packets::ComBinlogDumpHeader","mysql_common::packets::ComBinlogDumpGtidHeader","mysql_common::packets::SemiSyncAckPacketPacketHeader"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MySerialize-for-ConstU8%3CT,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#252-256\">source</a><a href=\"#impl-MySerialize-for-ConstU8%3CT,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"mysql_common/proto/trait.MySerialize.html\" title=\"trait mysql_common::proto::MySerialize\">MySerialize</a> for <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#253-255\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mysql_common/proto/trait.MySerialize.html#tymethod.serialize\" class=\"fn\">serialize</a>(&amp;self, buf: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class='docblock'>Serializes self into the <code>buf</code>.</div></details></div></details>","MySerialize","mysql_common::packets::FixedLengthFieldsLen","mysql_common::packets::ErrPacketHeader","mysql_common::packets::LocalInfileHeader","mysql_common::packets::AuthMoreDataHeader","mysql_common::packets::AuthSwitchRequestHeader","mysql_common::packets::ComStmtExecuteHeader","mysql_common::packets::ComStmtSendLongDataHeader","mysql_common::packets::ComRegisterSlaveHeader","mysql_common::packets::ComTableDumpHeader","mysql_common::packets::ComBinlogDumpHeader","mysql_common::packets::ComBinlogDumpGtidHeader","mysql_common::packets::SemiSyncAckPacketPacketHeader"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MyDeserialize%3C'de%3E-for-ConstU8%3CT,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#235-250\">source</a><a href=\"#impl-MyDeserialize%3C'de%3E-for-ConstU8%3CT,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"mysql_common/proto/trait.MyDeserialize.html\" title=\"trait mysql_common::proto::MyDeserialize\">MyDeserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.SIZE\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#240\">source</a><a href=\"#associatedconstant.SIZE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"mysql_common/proto/trait.MyDeserialize.html#associatedconstant.SIZE\" class=\"constant\">SIZE</a>: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; = _</h4></section></summary><div class='docblock'>Size hint of a serialized value (in bytes), if it’s constant.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Ctx\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Ctx\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"mysql_common/proto/trait.MyDeserialize.html#associatedtype.Ctx\" class=\"associatedtype\">Ctx</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a></h4></section></summary><div class='docblock'>Some structs defines deserialization in the context of another value. <a href=\"mysql_common/proto/trait.MyDeserialize.html#associatedtype.Ctx\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#243-249\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mysql_common/proto/trait.MyDeserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>((): Self::<a class=\"associatedtype\" href=\"mysql_common/proto/trait.MyDeserialize.html#associatedtype.Ctx\" title=\"type mysql_common::proto::MyDeserialize::Ctx\">Ctx</a>, buf: &amp;mut <a class=\"struct\" href=\"mysql_common/io/struct.ParseBuf.html\" title=\"struct mysql_common::io::ParseBuf\">ParseBuf</a>&lt;'de&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class='docblock'>Deserializes self from the given <code>buf</code>. <a href=\"mysql_common/proto/trait.MyDeserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","MyDeserialize<'de>","mysql_common::packets::FixedLengthFieldsLen","mysql_common::packets::ErrPacketHeader","mysql_common::packets::LocalInfileHeader","mysql_common::packets::AuthMoreDataHeader","mysql_common::packets::AuthSwitchRequestHeader","mysql_common::packets::ComStmtExecuteHeader","mysql_common::packets::ComStmtSendLongDataHeader","mysql_common::packets::ComRegisterSlaveHeader","mysql_common::packets::ComTableDumpHeader","mysql_common::packets::ComBinlogDumpHeader","mysql_common::packets::ComBinlogDumpGtidHeader","mysql_common::packets::SemiSyncAckPacketPacketHeader"],["<section id=\"impl-StructuralPartialEq-for-ConstU8%3CT,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysql_common/misc/raw/int.rs.html#222\">source</a><a href=\"#impl-StructuralPartialEq-for-ConstU8%3CT,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"mysql_common/misc/raw/int/struct.ConstU8.html\" title=\"struct mysql_common::misc::raw::int::ConstU8\">ConstU8</a>&lt;T, N&gt;</h3></section>","StructuralPartialEq","mysql_common::packets::FixedLengthFieldsLen","mysql_common::packets::ErrPacketHeader","mysql_common::packets::LocalInfileHeader","mysql_common::packets::AuthMoreDataHeader","mysql_common::packets::AuthSwitchRequestHeader","mysql_common::packets::ComStmtExecuteHeader","mysql_common::packets::ComStmtSendLongDataHeader","mysql_common::packets::ComRegisterSlaveHeader","mysql_common::packets::ComTableDumpHeader","mysql_common::packets::ComBinlogDumpHeader","mysql_common::packets::ComBinlogDumpGtidHeader","mysql_common::packets::SemiSyncAckPacketPacketHeader"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()